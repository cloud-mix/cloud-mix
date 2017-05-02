var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');
var Songs = require('./song');

var Contributor = db.define('contributor', {
  username: Sequelize.TEXT,
  track: Sequelize.TEXT
});

module.exports = Contributor;
