var Sequelize = require('sequelize');
var db = require('../config/database');
var User = require('../models/user').User;
var Song = require('../models/song');

var postSong = function(req, res){
  Song.findOne({where: {title: req.body.title, genre: req.body.genre, userId: req.body.userId}})
  .then((song) => {
    if(song){
      console.log("Song already exists. ", song);
      res.status(200).send(song);
    } else {
      User.find({where: { id: req.body.userId }})
      .then((user) => {
        Song.create({
        title: req.body.title,
        genre: req.body.genre,
        contriblimit: req.body.contriblimit,
        contribcount: 1,
        completion: 0.0,
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


// var getSongsFromDB = function(req, res){
//   //get songs from DB then render to Client with axios call
// }


module.exports = {
  postSong
}
