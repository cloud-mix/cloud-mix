var s3 = require("s3");
var fs = require("fs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var FileReader = require("filereader");

var client = s3.createClient({
  maxAsyncS3: 20, // this is the default
  s3RetryCount: 3, // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
  }
});

var uploader = function(req, res) {
  var blobUrl = req.body.file;
  var zeKey = req.body.key;
 
  console.log('blobUrl is ', blobUrl);
  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";

  xhr.onload = function() {
    console.log("got into xhr.onload");
    var recoveredBlob = this.response;
    console.log('recovered blob is ', recoveredBlob);
    var reader = new FileReader();
    reader.onload = function() {
      var blobAsDataUrl = reader.result;
      var params = {
        localFile: blobAsDataUrl,

        s3Params: {
          Bucket: "cloudmix",
          Key: zeKey
        }
      };
      console.log("got into reader.onload");

      var upload = client.uploadFile(params);

      upload.on("error", function(err) {
        console.error("unable to upload: ", err.stack);
      });

      upload.on("progress", function() {
        console.log(
          "progress",
          upload.progressMd5Amount,
          upload.progressAmount,
          upload.progressTotal
        );
      });

      upload.on("end", function() {
        console.log("done uploading");
      });
    };
    
    reader.readAsDataURL(recoveredBlob);
  };
  xhr.open("GET", blobUrl, true);
  xhr.send();
};

module.exports = {
  uploader
};
