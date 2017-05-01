var Sequelize = require('sequelize');
var db = require('../config/database');
var User = require('../models/user').User;
var Song = require('../models/song').Song;
var Contributor = require('../models/contributor').Contributor;

var postSongsToAWSAndDB = function(req, res){
  //1 post request
  //post to S3 and also create a row in Contributors schema
  //and reference the req.user.id from params or body

  //2 get request and a post request
  //then do a get request to get all contributors of the songs in S3
  //with the same song.id as the song being submitted from the axios call
  //to get the contributorCount and add 1 to the count down below to
  //the Post Songs function

  //post request to store S3's info to our DB
  //then post Song with the songUrl from S3 to ElephantSQL DB along with the
  //title, genre contributorLimit specified by it's original creator
}


var getSongsFromDB = function(req, res){
  //get songs from DB then render to Client with axios call
}


module.exports = {
  postSongsToAWSAndDB,
  getSongsFromDB
}
