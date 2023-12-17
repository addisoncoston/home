module.exports.format = async event => {
  console.log(JSON.stringify(event))
  let timecodes, smpte, request, items, frame_rate, obj, bucket, key, region, uri, runToggle, transcripts, formattedArvato, formattedText, rawText, formattedTextAvid, errLog, formattedTextKey, formattedArvatoKey, rawTextKey, formattedAvidKey;

  await setVar(event)
    .then(result => {
      //setvar set successfully
    })
    .catch(err => {
      //setvar failed
      console.log('676 error', err)
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
 
  await s3Put(obj.results.TranscriptReadable.split(".com/").pop(),  bucket, formattedText)

  await s3Put(obj.results.TranscriptArvato.split(".com/").pop(),  bucket, JSON.stringify(formattedArvato))

  await s3Put(obj.results.TranscriptRaw.split(".com/").pop(),  bucket, JSON.stringify(rawText))

  await s3Put(obj.results.TranscriptAvid.split(".com/").pop(),  bucket, formattedTextAvid)

  console.log(1148, JSON.stringify(obj))

////Check if a target language was included and translate if needed.
  if(obj.hasOwnProperty("target_language")){
    
    //send sns message to trigger translate lambda
    let snsMessage = JSON.stringify(obj);

    await snsPublish(snsMessage, process.env.snsTranslate)
    .then((res) => {
      console.log(1187, res)
    })
    .catch((err) => {
      console.log(1190, err)
    })

    // await performTranslation(obj, bucket)
    // .then((res) => {
    //   console.log(1154, res);
    // })
    // .catch((err) => {
    //   console.log(1157, err)3
    // })

  }

  console.log("obj going to dynamo", JSON.stringify(obj))
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
      await db.get(request)
      .then((res) => {
        items = res
      })
      .catch((err) => {
        console.log(1206, err)
        reject(err)
      })
      // console.log(745, items)
      try {
        items = items.Item;
        console.log(1455, items)
      }
      catch(err){
        reject('no item')
      }
      
      if(items == null){
        reject('no item')
      }

      try {
        frame_rate = parseFloat(items.frame_rate);
      } 
      catch(err){
        return{}
      }

      
      timecodes.constants.framerate = frame_rate;
      start_timecode = parseFloat(timecodes.toSeconds(items.start_timecode)) //smpte(items.StartTimecode, frame_rate);
      
      obj = {
        status: 'Formatted',
        user: user,
        serviceId: path.parse(key).name,
        "results": {
          TranscriptReadable: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.txt',
          TranscriptArvato: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '_arvato.txt',
          TranscriptRaw: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.raw',
          TranscriptJson: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.json',
          TranscriptAvid: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '_avid.txt',
          TranscriptSRT: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.srt',
          TranscriptVTT: 'https://' + bucket + '.s3.' + region + '.amazonaws.com/' + path.dirname(key) + '/' + path.parse(key).name + '.vtt'
        },
        tc: start_timecode,
        fps: frame_rate,
        chunksize: parseFloat(items.ChunkSize),
        timeCounter: 0,
        confidenceCutoff: 0.6
      }

      if(items.hasOwnProperty("uploaded_on")){
        obj.uploaded_on = items.uploaded_on;
      }

      if(items.hasOwnProperty("TargetLanguage")){
        obj.target_language =  items.target_language;
      }

      resolve()
      
    })
  }
 
  function setSpeakers(input){
    return new Promise((resolve, reject) => {

      try {

        for(i in Object.keys(input)){
          let v = Object.keys(input)[i];
          // console.log(68, v, input[v])
          
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
          status: input.status,
          results: input.results
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


}