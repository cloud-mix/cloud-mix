var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Song = db.define('song', {
  title: Sequelize.TEXT,
  genre: Sequelize.TEXT,
  contriblimit: Sequelize.INTEGER,
  contribcount: Sequelize.INTEGER,
  completion: Sequelize.FLOAT,
  url: Sequelize.ARRAY(Sequelize.BLOB),
  contributors: Sequelize.ARRAY(Sequelize.TEXT),
  offsets: Sequelize.ARRAY(Sequelize.INTEGER)
});

module.exports = Song;

