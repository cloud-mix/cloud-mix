var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Song = db.define('song', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: Sequelize.TEXT,
  genre: Sequelize.TEXT,
  contributorLimit: Sequelize.TEXT,
  contributorCount: Sequelize.TEXT,
  songUrl: Sequelize.TEXT,
});

module.exports = Song;

