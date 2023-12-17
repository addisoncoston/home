module.exports.format = async event => {
  console.log(JSON.stringify(event))
  let timecodes, smpte, request, items, frame_rate, obj, bucket, key, region, uri, runToggle, transcripts, formattedArvato, formattedText, rawText, formattedTextAvid, errLog, newSrt;

  await setVar(event)
    .then(result => {
      //setvar set successfully
    })
    .catch(err => {
      //setvar failed
      console.log(676, err)
      errLog = err
      runToggle = false;
    })

  if(runToggle == false){return {statusCode: 200, body: JSON.stringify(errLog)}}

  if(path.extname(key) != '.json'){
    return {
      statusCode: 200,
      body: 'ignoring file'
    }
  }

  await setSpeakers(items)
    .then(result => {
      //speakers set successfully
    })
    .catch(err => {
      //speakers set failed
      console.log(678, err)
      errLog = err
      runToggle = false;
    })
  
  if(runToggle == false){return {statusCode: 500, body: JSON.stringify(errLog)}}

  transcripts = await formatTransText(obj, bucket, key);
  formattedText = transcripts.formattedText;
  rawText = transcripts.rawText;
  formattedTextAvid = await formatTransAvid(obj, bucket, key, '5');;
  formattedArvato = await formatArvato(obj, bucket, key);

  newSrt = await convertSrt(newSrt, 30, obj.fps)

  await s3Put(path.dirname(key) + '/' + path.parse(key).name + '.txt',  bucket, formattedText)

  await s3Put(path.dirname(key) + '/' + path.parse(key).name + '_arvato.txt',  bucket, JSON.stringify(formattedArvato))

  await s3Put(path.dirname(key) + '/' + path.parse(key).name + '.raw',  bucket, JSON.stringify(rawText))

  await s3Put(path.dirname(key) + '/' + path.parse(key).name + '_avid.txt',  bucket, formattedTextAvid)
  
  await s3Put(path.dirname(key) + '/' + path.parse(key).name + '.srt',  bucket, newSrt)

  await updateItem(obj)

  ///If the call comes from Scaletech then call their API to update status
  if(obj.hasOwnProperty("uploaded_on")){

    await updateScaleTechHotFix(process.env.scaleTechKey, obj.serviceId, obj.status, obj.uploaded_on)
      .then(data => {
        console.log('706, scaletech db update success', data)
      })
      .catch(err => {
        console.log(709, err)
      })
      
  }

  return {
      statusCode:200,
      body: JSON.stringify(event)
  }

  function setVar(input){
    return new Promise(async (resolve, reject) => {
      
      timecodes = require('./node_modules/node-timecodes/dist/index.js');
      smpte = require('smpte-timecode');
      event = JSON.parse(input.Records[0].Sns.Message);
      bucket = event.Records[0].s3.bucket.name;
      key = event.Records[0].s3.object.key;
      if(key.split('.')[0] == ""){
        reject('ignoring')
      }
      user = event.Records[0].s3.object.key.split('/')[0];
      region = event.Records[0].awsRegion;
      uri = 'https://' + event.Records[0].s3.bucket.name + '.s3.' + event.Records[0].awsRegion + '.amazonaws.com/' + event.Records[0].s3.object.key;

      request = {User: user, Service: path.basename(key).split('.')[0]}; 
      console.log(743, request)
      items = await db.get(request);
      console.log(745, items)
      items = items.Item;
      if(items == null){
        reject('no item')
      }

      frame_rate = parseFloat(items.FrameRate);
      timecodes.constants.framerate = frame_rate;
      start_timecode = parseFloat(timecodes.toSeconds(items.StartTimecode)) //smpte(items.StartTimecode, frame_rate);
      
      obj = {
        status: 'Formatted',
        user: user,
        serviceId: path.parse(key).name,
        readable: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.txt',
        arvato: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '_arvato.txt',
        raw: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.raw',
        json: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.json',
        avid: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '_avid.txt',
        srt: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.srt',
        vtt: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.vtt',
        tc: start_timecode,
        fps: frame_rate,
        chunksize: parseFloat(items.ChunkSize),
        timeCounter: 0,
        confidenceCutoff: 0.6
      }

      if(items.hasOwnProperty("uploaded_on")){
        obj.uploaded_on = items.uploaded_on;
      }

      resolve()
      
    })
  }
 
  function setSpeakers(input){
    return new Promise((resolve, reject) => {

      try {

        for(i in Object.keys(input)){
          let v = Object.keys(input)[i];
          console.log(68, v, input[v])
          
          if(v.includes('Speaker')){
            if(input[v] != ""){
              obj[v.toLowerCase()]= input[v]
            }
            
          }
      
        }
        resolve()

      }
      catch(err){
        reject(err)
      }

    })
  }

  function updateItem(input){
    return new Promise(async (resolve, reject) => {
      console.log(919, input)
      await db.update(
        {User: input.user, Service: input.serviceId},
        {
          Status: input.status,
          TranscriptReadable: input.readable,
          TranscriptRaw: input.raw,
          TranscriptArvato: input.arvato,
          TranscriptJson: input.json,
          TranscriptAvid: input.avid,
          TranscriptSRT: input.srt,
          TranscriptVTT: input.vtt
        }
      )
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })

    })
  }

  function convertSrt(inputString, threshold, frame_rate){
    return new Promise((resolve, reject) => {
      
    let srt = inputString;
    let newSrt = [];
    let newNew = [];
    
    // let frameRate = parseFloat(dbData.frame_rate);
    let frameRate = parseFloat(frame_rate);

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
    
        newNew.push(obj)
    
      }
      console.log(249, "success")

    
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

}