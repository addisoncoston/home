var AWS = require('aws-sdk');
// AWS.config.update({region: 'us-west-2'});
var s3 = new AWS.S3({
  signatureVersion: 'v4'
});
var sns = new AWS.SNS();


const { Table } = require("dynamo-light");
const db = new Table("LA-Media-Admin-API");
var timecodes = require('node-timecodes');
const Timecode = require('smpte-timecode')
var msToTimecode = require('ms-to-timecode');

const srtparsejs = require('srtparsejs');
var path = require('path');
const fs = require('fs');

module.exports.srtConvert = async (event) => {

  console.log(JSON.stringify(event));

  let inputBucket, inputKey, gate, newSrt, outputKey, snsTopic, jobId, dbData;
  outputBucket = process.env.bucket;
  snsTopic =  process.env.snsTopic;

  gate = false;

  await setVar(event)
  .then((res) => {

    inputKey = res.inputKey;
    inputBucket = res.inputBucket;
    jobId = path.parse(inputKey).name;

    if(inputKey.includes('.srt') && inputKey.includes(process.env.apiKey)){
      gate = true;
    } 

  })
  .catch(async (err) => {
    console.log(13, err)

    await publishError("srtConvert43")
      .catch((err) => {
        console.log(45, err)
      })

  })

  if(gate){
    await getItemData(process.env.apiKey, jobId)
    .then((res) => {
      dbData = res;
    })
    .catch(async (err) => {
      console.log(45, err)
      gate = false;

      await publishError("srtConvert43")
      .catch((err) => {
        console.log(459, err)
      })

    })

    outputKey = "output/" + dbData.ItemID + '.srt'
    console.log(25, outputBucket, inputKey, outputKey)
    console.log(dbData)

  }

  if(gate){

    await getObject(inputBucket, inputKey)
    .then((res) => {
      newSrt = res
    })
    .catch(async (err) => {
      console.log(39, err)
      await publishError("srtConvert79")
      .catch((err) => {
        console.log(459, err)
      })
    })

    await addLineBreaks(newSrt, 30, dbData)
    .then((res) => {
      newSrt = res;
    })
    .catch(async (err) => {
      console.log(47, err)

      await publishError("srtConvert91")
      .catch((err) => {
        console.log(459, err)
      })
    })

    await putObject(newSrt, outputBucket, outputKey)
    .then((res) => {
      console.log("put success- " + outputKey, res)
    })
    .catch(async (err) => {
      console.log(53, err)

      await publishError("srtConvert43")
      .catch((err) => {
        console.log(459, err)
      })
    })

    // putting temp file to 24 hour purge 
    await putObject(newSrt, "nfl-24hour-purge", "combine/" + path.parse(outputKey).name + ".srt")
    .then((res) => {
      console.log("put success- " + outputKey)
    })
    .catch(async (err) => {
      console.log(53, err)

      await publishError("srtconvert118")
      .catch((err) => {
        console.log(459, err)
      })

    })


    await makeLink("nfl-24hour-purge", "combine/" + path.parse(outputKey).name + ".srt", dbData.User, dbData.Service)    
    .then((res) => {
      console.log("makelink success")
    })
    .catch(async (err) => {
      console.log(53, err)

      await publishError("134srtconvert")
      .catch((err) => {
        console.log(459, err)
      })

    })


    } else {
      return {}
    }


  function setVar(input){
    return new Promise((resolve, reject) => {
      let obj = {
        bucket: "",
        key: ""
      }

      try {

        event = JSON.parse(input.Records[0].Sns.Message);
        obj.inputBucket = event.Records[0].s3.bucket.name;
        obj.inputKey = event.Records[0].s3.object.key;
        obj.topic = input.Records[0].Sns.TopicArn
        // user = key.split('/')[0];
        // region = event.Records[0].awsRegion;
        // uri = 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + key;
        resolve(obj)
      }
      catch(err){
        console.log(79, err)
        reject(err)
      }
      

      
    })
  }
  function addLineBreaks(inputString, threshold, dbData){
    return new Promise((resolve, reject) => {

    let srt = inputString;
    let newSrt = [];
    let newNew = [];
    
    let frameRate = parseFloat(dbData.FrameRate);

    try {
        srt = srtparsejs.parse(srt);        
    } 
    catch {
        reject('srt parse failure')
    }

    let idAdd = 0;
    try {
      for (i in srt){
    
        let item = srt[i];
        // console.log(136, item);
        let text, id, num, obj1, obj2;
        text = item.text;
        id = parseInt(item.id);
        num = text.length;
      
        obj1 = {
          id: id + idAdd,
          startTime: item.startTime,
          endTime: item.endTime,
          text: text //temp1.join(' ') + "\n" + temp2.join(' ')
        };
        obj2 = {
          id: 0,
          startTime: "",
          endTime: "",
          text: ""
        }
      
        if(num > threshold){
          // the text needs to be split
          let newText, words, wordCount, temp1, temp2;
          // console.log(149, obj1)
          words = text.split(" ");
          // console.log(151, words, num, obj1.id - 1)
      
          if(num < threshold * 1.5){
            //text line is less than threshold number multiplied by 1.5
            //text needs to be split into 2 lines
            // console.log(85, obj1)
            wordCount = Math.floor(words.length / 2);
            temp1 = words.slice(0, wordCount).join(" ");
            temp2 = words.slice(wordCount).join(" ");
            obj1.text = temp1.toUpperCase() + "\n" + temp2.toUpperCase();
            // obj1.startTime = newSrt[obj1.id];
            // console.log(80, obj1)
            if(i = 0){
              return
            }
            newSrt.push(obj1)
          //   return
          } else {
            // console.log(236, item)
             //split the text into 2 sections and split the timecode
             //a new section is being add so the idAdd counter must increase by 1
             //text must be broken in  2  and a second objecty with id must  be
             
            idAdd ++;
      
            let tempSplit1 = obj1.endTime.split(',');
            console.log(107, tempSplit1)
            let tempEnd = Timecode(tempSplit1[0] + ":00", frameRate)
            console.log(109, tempEnd.toString())
            let msSplit = tempSplit1[1].split('');
            let ms = tempSplit1[1];
            if(msSplit[0] == "0" && msSplit[1] == "0" && msSplit[2] != "0"){
              ms = tempSplit1[1] + "00"
    
            }
    
            let obj1EndtimeMs = msToTimecode(ms, frameRate)
            // let obj1EndtimeMs = msToTimecode("2000", frameRate)
            console.log(111, obj1EndtimeMs)
            tempEnd = tempEnd.add(obj1EndtimeMs);
            console.log(113, tempEnd.toString())
            obj2.endTime = tempEnd.toString();
      
      
      
            let tempSplit2 = obj1.startTime.split(",");
            let tempStart = Timecode(tempSplit2[0] + ":00", frameRate)
            tempSplit2[1] = (tempSplit2[1].startsWith("00")) ? "00": tempSplit2[1];
            let obj1StarttimeMs = msToTimecode(tempSplit2[1], frameRate)
            tempStart = tempStart.add(obj1StarttimeMs);
      
          //   obj1.endTime = tempEnd.toString();
            obj1.startTime = tempStart.toString();
            
            console.log(123, tempEnd, tempStart);
            let dif = tempEnd.subtract(tempStart);
            console.log(124, tempStart, dif);
    
            dif = Math.round(dif.frameCount/2);
            dif = Timecode(dif, frameRate);
            // console.log(126, dif)
            obj1.endTime = tempStart.add(dif); //.toString();
            // console.log(128, obj1.endTime.toString())
            obj2.startTime = obj1.endTime;
            dif = dif * 2;
            // console.log(116, obj1)
          //   console.log(99, dif)
            // console.log(100, tempEnd.add(dif).toString())
            //   return{}
          //   obj2.endTime = tempEnd.add(dif).toString()
          //   console.log(106, obj2.endTime)
          //   return {}
          //   console.log(100, obj1.startTime.toString(), obj1.endTime.toString())
          //   console.log(101, obj2.startTime.toString(), obj2.endTime.toString())
          //   return
            wordCount = Math.floor(words.length / 2);
            // console.log(168)
            temp1 = words.slice(0, wordCount).join(" ");
            if(temp1.length > threshold){
              // console.log(256, temp1, temp1.length);
              let tempArr1 = temp1.split(" ");
              let newCount1 = Math.round(tempArr1.length/2);
              // console.log(235)
              let t1 = tempArr1.slice(0, newCount1).join(" ");
              // console.log(237, t1)
              let t2 = tempArr1.slice(newCount1).join(" ");
              // console.log(239, t2)
              if(t1.length > threshold){
                // console.log(241)
                t1 = t1.split(" ")
                // console.log(243, t1)
                let lastItem = t1.pop()
                // console.log(244, lastItem)
                t2 = lastItem + " " + t2
                // console.log(247, t2)
                // temp1 = t1 + "\n" + t2;
                console.log(temp1)
              }
              temp1 = t1 + "\n" + t2; 
      
            }
            
            temp2 = words.slice(wordCount).join(" ");
            if(temp2.length > threshold){
              // console.log(240, temp2, temp2.length)
      
              let tempArr = temp2.split(" ");
              // console.log(260, tempArr)
              let newCount = Math.round(tempArr.length/2)
              // console.log(261, newCount)
      
              temp2 = tempArr.slice(0, newCount).join(" ") + "\n" + tempArr.slice(newCount).join(" ")
              // console.log(temp2)
            }
      
            obj1.text = temp1.toUpperCase();
      
      
            obj2.id = obj1.id + 1
            obj2.text = temp2.toUpperCase();
            
            // console.log(255, "obj1", obj1)
            // console.log(256, "obj2", obj2)
    
            obj1.startTime = timecodes.toSeconds(obj1.startTime.toString())
            obj1.startTime = timecodes.fromSeconds(obj1.startTime, {ms:true})
            
            // if(newSrt != []){`
            //   obj1.startTime = newSrt[-1].endTime
            // }
    
            // obj2.startTime = timecodes.toSeconds(obj2.startTime.toString())
            // obj2.startTime = timecodes.fromSeconds(obj2.startTime, {ms:true})
      
            
            
            obj1.endTime = timecodes.toSeconds(obj1.endTime.toString())
            obj1.endTime = timecodes.fromSeconds(obj1.endTime, {ms:true})
            // console.log(189, obj1)
            obj2.startTime = obj1.endTime //timecodes.fromSeconds(obj2.startTime, {ms:true})
            
            obj2.endTime = timecodes.toSeconds(obj2.endTime.toString())
            obj2.endTime = timecodes.fromSeconds(obj2.endTime, {ms:true})
      
            // console.log(278, "obj1", obj1)
            // console.log(279, "obj2", obj2)
            
            newSrt.push(obj1)
            newSrt.push(obj2)
            
      
          }       
                  
            
      
        } else {
            // console.log(169, item, obj1)
            // item.id = id + idAdd
            obj1.text = obj1.text.toUpperCase();
            newSrt.push(obj1)
        }
      
      }
    
      let adjust = 0
      // console.log(300, "newSrt", newSrt)
    
    
      //capitalize
      for (z in newSrt){
        let v = newSrt[z];
    
        if(v.hasOwnProperty("process")){
          continue
        }
    
        let obj = {
          id: v.id - adjust,
          startTime: (z == 0)? v.startTime: newSrt[z - 1].endTime,
          endTime: v.endTime,
          text: v.text
        }
        // console.log(246, v)
        // console.log(308, obj)
        
        
        if(!obj.text.includes("\n") && newSrt[parseInt(z) + 1]){
          // console.log(310, obj)
          // console.log("309 next item", newSrt[parseInt(z) + 1])
    
          if(!newSrt[parseInt(z) + 1].text.includes("\n")){
    
            // console.log(316, newSrt[parseInt(z) + 1], z)
    
            if(newSrt[parseInt(z) + 1].text.length + obj.text.length > threshold){
              // console.log(259)
              obj.text = obj.text + "\n" + newSrt[parseInt(z) + 1].text
              obj.endTime = newSrt[parseInt(z) + 1].endTime;
              adjust += 1
              newSrt[parseInt(z) + 1].process = false;
            } else {
              // console.log(265)
              obj.text = obj.text + " " + newSrt[parseInt(z) + 1].text
              obj.endTime = newSrt[parseInt(z) + 1].endTime;
              adjust += 1
              newSrt[parseInt(z) + 1].process = false;
            }
            // obj.endTime = newSrt[parseInt(z) + 1].endTime;
            // adjust += 1
            // newSrt[parseInt(z) + 1].process = false;
    
            
          }
        
        }
    
        
    
        // console.log(249, obj)
        newNew.push(obj)
    
      }
      console.log(249, "success")
      // fs.writeFileSync("test/new.json", JSON.stringify(newNew))
    
    
      // newNew = newSrt
      // console.log(222, newNew)
    
    }
    catch (err){
        console.log(252, err)
        ///////////NEED To RE_ENABLE FOR PROD
      reject('srt loop failure', err)
    }

    try {
        newSrt = srtparsejs.toSrt(newNew);
        resolve(newSrt)
        console.log("array back to srt done")
    }
    catch{
        reject('text to srt failure')
    }


    


    })
  }

  function getObject(bucket, key){

    return new Promise((resolve, reject) => {

    s3.getObject({
        Bucket: bucket,
        Key: key
    }, (err, data) => {
        if (err) {
            reject(err)
        }
            // console.log(data.Body.toString())
            resolve(data.Body.toString())
        })
    })
    

  };

  function putObject(data, bucket, key){
    return new Promise((resolve, reject) => {

      var params = {
        Body: data, 
        Bucket: bucket, 
        Key: key
      };
      s3.putObject(params, function(err, data) {
        if (err){
          console.log(err, err.stack)
          reject(err)
        } else {
          console.log(data)
          resolve(data)
        }
      });

    })
  }

  function getItemData(apiKey, jobId){
    return new Promise(async (resolve, reject) => {
      console.log(255, apiKey, jobId)
  
      let data
      
      await db.get({
          "User": apiKey,
          "Service": jobId
      })
      .then((res) => {
        
        data = res;
        console.log(2138, data)
        resolve(data.Item)
      })
      .catch((err) => {
        console.log(2141, err)
        reject(err)
      })
   
    })
  }

  function makeLink(bucket, key, user, service){
    return new Promise( async (resolve, reject) => {

      var params = {Bucket: bucket, Key: key, Expires: 86400};
      var url = s3.getSignedUrl('getObject', params);
      
      await db.update({
        User: user,
        Service: service
      },
      {
        TempLink: url
      })
      .then((data) => {
        // dbData = data.Item
        console.log(622, data)
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })


    })
  }

}

module.exports.submitTranscription = async (event) => {

  var axios = require('axios');
  var http = require('https');
  console.log(JSON.stringify(event));
  
  let putUrl, gate, data, bucket, key, fileName;

  gate = false;

  await setVar(event)
    .then(async (res) => {
      console.log(29, "Variables Set");
      bucket = res.bucket;
      key = res.key.replace(/\+/g, ' ');
      fileName = path.parse(key).name;
      console.log(260, key, fileName);
      gate = true;
    })
    .catch(async (err) => {
      console.log(457, err);
      gate = false;
      await publishError(JSON.stringify(err))
      .catch((err) => {
        console.log(459, err)
      })
    })

  if(gate){

    await getUploadUrl(fileName)
    .then((res) => {
      putUrl = res;
      gate = true;
    })
    .catch(async (err) => {
      console.log(err)
      gate = false;

      await publishError("submitTranscription474")
      .catch((err) => {
        console.log(459, err)
      })

    })
  
  }

  if(gate){

    await getDataS3(bucket, key)
    .then((res) => {
      console.log(50, "get data success")
      data = res;
      gate = true;
    })
    .catch(async (err) => {
      console.log(292, err)
      gate = false;
      
      await publishError("submitTranscription495")
      .catch((err) => {
        console.log(459, err)
      })
    })

  }
  
  if(gate){

    await putFile(putUrl, data)
    .then((res) => {
      console.log(59, "put file success")
      gate = true;
    })
    .catch(async (err) => {
      console.log(52, err)
      gate = false;

      await publishError("submitTranscription514")
      .catch((err) => {
        console.log(459, err)
      })

    })

  }

  function putFile(url, filePath) {
    return new Promise((resolve, reject) => {
      const fileStream = fs.createReadStream(filePath);
  
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Length': fs.statSync(filePath).size,
        },
      };
      console.log(664, options)
  
      const req = http.request(url, options, (res) => {
        if (res.statusCode === 200) {
          resolve('File uploaded successfully!');
        } else {
          reject(new Error(`Failed to upload file. Status code: ${res.statusCode}`));
        }
      });
  
      req.on('error', (error) => {
        reject(new Error(`Error uploading file: ${error.message}`));
      });
  
      fileStream.pipe(req);
    });
  }


  // function putFile(inputUrl, filePath){
  //   return new Promise(async (resolve, reject) => {

  //     // let config = {
  //     //   method: 'put',
  //     //   url: inputUrl,
  //     //   // headers: { 
  //     //   //   'x-api-key': process.env.apiKey 
  //     //   //   // 'Content-Type': 'video/mp4'
  //     //   // },
  //     //   data : fs.readFileSync(filePath)
  //     // };

  //     await axios.put(inputUrl, fs.readFileSync(filePath))
  //     .then(function (response) {
  //       console.log(717, response);

  //       resolve(response)
  //     })
  //     .catch(function (error) {
  //       console.log(335, error);
  //       reject(error)
  //     });
      

  //   })
  // }

  async function getDataS3(bucket, key) {
    try {
      const params = {
        Bucket: bucket,
        Key: key
      };
      console.log(686, params);
    
      const data = await s3.getObject(params).promise();
      console.log(355, data);
    
      const filePath = path.join('/tmp/', path.parse(key).base);
      console.log(729, filePath)
      fs.writeFileSync(filePath, data.Body);
      console.log(731, filePath)
      return filePath;
    } catch (err) {
      console.log(352, err);
      throw err;
    }
  }

  // function getDataS3(bucket, key){
  //   return new Promise((resolve, reject) => {
  
  //     var params = {
  //       Bucket: bucket, 
  //       Key: key
  //      };
  
  //      s3.getObject(params, function(err, data) {
  //       if (err) {
  //         console.log(352, err);
  //         reject(err);
  //       } else {
  //         console.log(355, data);
  //         resolve(data.Body)
  //       }
  //     });
  
  //   })
  // }

  function getUploadUrl(input){ 
    return new Promise((resolve, reject) => {

      // replace illegal characters in input variable
      input = input.replace(/[\/:*?"<>|]/g, '');

      var config = {
        method: 'get',
        url: process.env.getUploadLink + "?item_id=" + input,
        headers: { 
          'x-api-key': process.env.apiKey
        }
      };

      console.log(321, config)
    
      axios(config)
      .then(async (res) => {
        console.log(153, JSON.stringify(res.data));
        putUrl = res.data.upload_url;
        resolve(putUrl)
    
      })
      .catch(function (error) {
        console.log(error);
        reject(error)
      });

    })
  }

  function setVar(input){
    return new Promise((resolve, reject) => {
      let obj = {
        bucket: "",
        key: ""
      }
      // lambda = new AWS.Lambda();
      event = JSON.parse(input.Records[0].Sns.Message);
      obj.bucket = event.Records[0].s3.bucket.name;
      obj.key = event.Records[0].s3.object.key;
      // user = key.split('/')[0];
      // region = event.Records[0].awsRegion;
      // uri = 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + key;

      resolve(obj)
    })
  }
};

module.exports.notifications = async (event) => {
  var axios = require('axios');
  let key, bucket, folder, id, dbData, user, slackMessage, subject, message;

  subject = event.Records[0].Sns.Subject;
  message = event.Records[0].Sns.Message;
  console.log(JSON.stringify(event))

  if(subject.includes("S3")){

    key = JSON.parse(message).Records[0].s3.object.key;
    bucket = process.env.bucket
    folder = key.split("/")[1];
    user = key.split("/")[0];
    id = key.split("/")[2];
  
    if(key.includes(process.env.apiKey) && folder == id){
      console.log(610, key);
      ///initial upload is successful.
  
      await db.get({
        User: user,
        Service: id
      })
      .then((data) => {
        dbData = data.Item
        console.log(622, dbData)
      })
  
      slackMessage = "Caption Processing: `" + dbData.ItemID + "` `" + dbData.Service + "`";
   
      await postSlack(slackMessage)
      .then((res) => {
  
        console.log(620, res)
  
      })
      .catch((err) => {
        console.log(err)
      })
      
      
      
    } else {
      return {}
    }

  } else if(subject == "error"){

    message = "<!here> Caption Error: `" + message + "`";
    
    await postSlack(message)
    .then((res) => {
  
      console.log(656, res)

    })
    .catch((err) => {
      console.log(660, err)
    })

  }




  function postSlack(input){
    return new Promise((resolve, reject) => {   

      let config = {
        method: 'put',
        url: process.env.slackWebhook,
        data : {text: input}
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        resolve(response)
      })
      .catch(function (error) {
        console.log(638, error);
        reject(error)
      });

    })
  }

}

function publishError(msg){
  return new Promise ((resolve, reject) => {

    var params = {
      Message: msg, /* required */
      Subject: 'error',
      TopicArn: process.env.errTopic
    };
    sns.publish(params, function(err, data) {
      if (err) {
        console.log(705, err, err.stack); // an error occurred
        reject(err)
      } else {
        console.log(708, data);           // successful response
        resolve(data)
      }
    });

  })

}