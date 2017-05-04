var AWS = require("aws-sdk");
var S3FS = require('s3fs');
var fs = require('fs');
// var fs = require("fs");
// var atob = require("atob");

// Load credentials and set region from JSON file
// AWS.config.loadFromPath("./config.json");
// var FileReader = require("filereader");
// s3 = new AWS.S3();

var uploader = function(req, res) {
  console.log("REQ.BODY", req.body.file);
  // var params = {
  //   Body: req.body.file,
  //   Bucket: "cloudmix",
  //   Key: "rawStream.txt"
  // };

  // s3.putObject(params, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("successful upload");
  //   }
  // });
  // s3fsImpl = new S3FS('cloudmix', {
  //     accessKeyId: process.env.AWSAccessKeyId,
  //     secretAccessKey: process.env.AWSSecretKey
  // });


  //   var file = req.files.data;
  //   var stream = fs.createReadStream(file.path);
  //   return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
  //       fs.unlink(file.path, function (err) {
  //           if (err) {
  //               console.error(err);
  //           }
  //       });
  //       res.status(200).end();
  //   });

};

module.exports = {
  uploader
};