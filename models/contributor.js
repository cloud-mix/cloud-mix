var Sequelize = require('sequelize');
var db = require('../config/database');
var Users = require('./user');
var Songs = require('./song');

var Contributor = db.define('contributor', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: {type: Sequelize.TEXT, allowNull: false},
  track: {type: Sequelize.TEXT, allowNull: false}
});

module.exports = Contributor;
