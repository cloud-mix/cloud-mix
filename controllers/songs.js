var Sequelize = require('sequelize');
var db = require('../config/database');
var User = require('../models/user').User;
var Song = require('../models/song');
var blobUtil = require('blob-util');

var postSong = function(req, res){
  Song.findOne({where: {title: req.body.title, genre: req.body.genre}})
  .then((song) => {
    if(song){
      console.log("Song already exists. ", song);
      res.status(200).send(song);
    } else {
      User.find({where: { username: req.body.username }})
      .then((user) => {
        Song.create({
        title: req.body.title,
        genre: req.body.genre,
        contriblimit: req.body.contriblimit,
        contribcount: 1,
        completion: 1/req.body.contriblimit,
        url: [req.body.url],
        contributors: [user.username],
        offsets: [0],
        userId: req.body.userId
      });
      res.sendStatus(201);
      });
    }
  });
}

var getMostRecentSongs = function(req, res){
  Song.findAll({ limit: 4, order: '"updatedAt" DESC'})
    .then((songs) => {
      console.log("4 Most Recent Songs Retrieved: ", songs);
      res.status(200).send(songs);
    })
    .catch((err) => {
      console.log("Couldn't Retrieve 4 Most Recent Songs Because: ", err);
      res.status(404).send();
    })
};

var getSoonToBeCompleted = function(req, res){
  Song.findAll({ limit: 4, order: '"completion" DESC'})
    .then((songs) => {
      console.log("4 Soonest To Be Completed Retrieved: ", songs);
      res.status(200).send(songs);
    })
    .catch((err) => {
      console.log("Couldn't Retrieve 4 Soon To Be Completed Songs Because: ", err);
      res.status(404).send();
    })
};

var getSongs = function(req, res){
  var tempObject = [];
  Song.findAll({})
    .then((songs) => {
      songs.forEach((song) => {
        arrayBufferToBlob(song.url[0].data)
        .then((data) => {
          tempObject = data;
          res.status(200).send(tempObject);
        })
      })
    })
    .catch((err) => {
      console.log("Couldn't retrieve songs from the DB because: ", err);
      res.status(404).send();
    })
};


var updateSong = function(req, res){
  Song.findOne({where: { title: req.body.title, genre: req.body.genre }})
  .then((song) => {
    Song.updateAttributes({
      contribcount: song.contribcount + 1,
      completion: (song.contribcount + 1) / song.contriblimit,
      url: song.url.push(req.body.url),
      contributors: song.contributors.push(req.body.contributors),
      offsets: song.offsets.push(req.body.offsets)
    });
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log("Song does not exist in the Database or Network Error: ", err);
    res.status(404).send();
  })
}



module.exports = {
  postSong,
  getMostRecentSongs,
  getSoonToBeCompleted,
  getSongs,
  updateSong
}
