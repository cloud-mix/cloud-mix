var Sequelize = require('sequelize');
var db = require('../config/database');
var User = require('../models/user').User;
var Song = require('../models/song');
var Contributor = require('../models/contributor').Contributor;

var postSongsToDB = function(req, res){
  Song.findOne({where: {title: req.body.title, genre: req.body.genre, userId: req.body.userId}})
  .then((song) => {
    if(song){
      console.log("Song already exists. ", song);
      res.status(200).send(song);
    } else {
      Song.create({
        title: req.body.title,
        genre: req.body.genre,
        contributorLimit: req.body.contributorLimit,
        contributorCount: req.body.contributorCount,
        songCompletion: req.body.songCompletion,
        songUrl: req.body.songUrl,
        userId: req.body.userId
      });
      res.sendStatus(201);
    }
  });
}


// var getSongsFromDB = function(req, res){
//   //get songs from DB then render to Client with axios call
// }


module.exports = {
  postSongsToDB
}
