var mongoose = require('mongoose');
var debug = require('debug')('app:models');
var findOrCreate = require('mongoose-findorcreate');

var userSchema = new mongoose.Schema({
  facebookId: String,
  googleId: String,
  email: String,
  username: String,
  created: { type: Date, default: Date.now()}
});

userSchema.plugin(findOrCreate);

var User = mongoose.model('Users', userSchema);

module.exports = User;
