var s3 = require("s3");
var fs = require('fs');

var client = s3.createClient({
 maxAsyncS3: 20,     // this is the default
 s3RetryCount: 3,    // this is the default
 s3RetryDelay: 1000, // this is the default
 multipartUploadThreshold: 20971520, // this is the default (20 MB)
 multipartUploadSize: 15728640, // this is the default (15 MB)
 s3Options: {
   accessKeyId: process.env.AWSAccessKeyId,
   secretAccessKey: process.env.AWSSecretKey,
 },
});


var uploader = function (req, res) {
  console.log(req.body);
  var file = req.body.file;
  var zeKey = req.body.key;
  fs.writeFile('../../SoundFiles/song.mp3', file, (err, done) => {
    if(err) {
      console.log(err);
    } else {
      var params = {
      localFile: file,

      s3Params: {
      Bucket: "cloudmix",
      Key: zeKey
    }}

    var upload = client.uploadFile(params);
    upload.on('error', function(err) {
     console.error("unable to upload: ", err.stack);
    });
    upload.on('progress', function() {
     console.log("progress", upload.progressMd5Amount,
               upload.progressAmount, upload.progressTotal);
    });
    upload.on("end", function() {
     console.log("done uploading");
    });
    }})};



module.exports = {
  uploader
}