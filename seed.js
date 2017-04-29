var mongoose = require('./config/database');

var User = require('./models/user');
var Song = require('./models/song');

var userObjects = require('./user');
var songObjects = require('./song');

User.remove({});
Song.remove({});

console.log('User', User);
console.log("Song", songObjects);

User.insertMany(userObjects, function(err, response){
  if(err){
    throw err;
  } else {
    console.log("In the response: ", response);
  }
});

Song.insertMany(songObjects, function(err, response){
  if(err){
    throw err;
  } else {
    console.log("In the response: ", response);
  }
});
