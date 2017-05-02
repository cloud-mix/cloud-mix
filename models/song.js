var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');

var Song = db.define('song', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: Sequelize.TEXT, allowNull: false},
  genre: {type: Sequelize.TEXT, allowNull: false},
  contributorLimit: {type: Sequelize.TEXT, allowNull: false},
  contributorCount: {type: Sequelize.TEXT, allowNull: false},
  songCompletion: {type: Sequelize.FLOAT, allowNull: false},
  songUrl: {type: Sequelize.ARRAY(Sequelize.TEXT), allowNull: false}
});

module.exports = Song;

