var mongoose = require('mongoose');
var debug = require('debug')('app:models');
var findOrCreate = require('mongoose-findorcreate');
var User = require('./user');

var contributorSchema = new mongoose.Schema({
  username: String,
  facebookId: String,
  googleId: String,
  userId: String
});

var songSchema = new mongoose.Schema({
  title: String,
  genre: String,
  contributorLimit: Number,
  contributorCount: Number,
  contributorsData: [contributorSchema],
  song: String,
  userId: String,
  created: { type: Date, default: Date.now()}
});

songSchema.plugin(findOrCreate);

var Song = mongoose.model('Songs', songSchema);

module.exports = Song;
