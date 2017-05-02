var Sequelize = require('sequelize');
var db = require('../config/database');
var Songs = require('./song');
var Contributors = require('./contributor');

var User = db.define('user', {
  username: {type:Sequelize.STRING, allowNull: false},
  password: {type:Sequelize.STRING, allowNull: false}
});

User.hasMany(Songs);
Songs.belongsTo(User, {foreignKey: 'userId'});
Songs.hasMany(Contributors);
Contributors.belongsTo(Songs, {foreignKey: 'songId'});

User.sync();
Songs.sync();
Contributors.sync();

module.exports = {
  User,
  Songs,
  Contributors
}

