var AWS = require("aws-sdk");
var fs = require("fs");
var atob = require("atob");
// Load credentials and set region from JSON file
AWS.config.loadFromPath("./config.json");
var FileReader = require("filereader");
s3 = new AWS.S3();

var uploader = function(req, res) {
  console.log("REQ.FILES.FILE", req.files);
  // console.log('REQ.BODY.KEY', req.body.key)
  // console.log('Object.getPrototypeOf(req.body.file)', Object.getPrototypeOf(req.body.file));
//   function toArrayBuffer(buf) {
//     var ab = new ArrayBuffer(buf.length);
//     var view = new Uint8Array(ab);
//     for (var i = 0; i < buf.length; ++i) {
//         view[i] = buf[i];
//     }
//     return ab;
// }

//   var arrBuff = toArrayBuffer(req.body.file.data);

//   function toBuffer(ab) {
//     var buf = new Buffer(ab.byteLength);
//     var view = new Uint8Array(ab);
//     for (var i = 0; i < buf.length; ++i) {
//         buf[i] = view[i];
//     }
//     return buf;
// }

// var buffer = toBuffer(arrBuff);

  var params = {
    Body: req.body.file.data,
    Bucket: "cloudmix",
    Key: "AlexTest.mp3",
    ContentEncoding: "application/byte-stream"
  };

  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful upload");
    }
  });
};

module.exports = {
  uploader
};
