var Sequelize = require('sequelize');
var db = require('../config/database');
var Songs = require('./song');

var User = db.define('user', {
  username: {type:Sequelize.STRING, allowNull: false},
  password: {type:Sequelize.STRING, allowNull: false}
});

User.hasMany(Songs);
Songs.belongsTo(User, {foreignKey: 'userId'});

User.sync();
Songs.sync();

module.exports = {
  User,
  Songs
}

