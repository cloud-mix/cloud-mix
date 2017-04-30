var Sequelize = require('sequelize');
var db = require('../config/database');
var Songs = require('./song');
var Contributors = require('./contributor');

var User = db.define('user', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

User.hasMany(Songs);
Songs.belongsTo(User);
Songs.hasMany(Contributors);
Contributors.belongsTo(Songs);

User.sync();
Songs.sync();
Contributors.sync();

module.exports = {
  User,
  Songs,
  Contributors
}

