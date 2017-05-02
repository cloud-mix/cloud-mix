var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Song = db.define('song', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: Sequelize.TEXT,
  genre: Sequelize.TEXT,
  contriblimit: Sequelize.INTEGER,
  contribcount: Sequelize.INTEGER,
  completion: Sequelize.FLOAT,
  url: Sequelize.ARRAY(Sequelize.TEXT)
});

module.exports = Song;

