var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');
var Songs = require('./song');

var Contributor = db.define('contributor', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: Sequelize.TEXT,
  track: Sequelize.TEXT
});

module.exports = Contributor;
