var Sequelize = require('sequelize');
var db = require('../config/database');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var User = require('../models/user').User;

var signUp = function(req, res){
  bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      User.findOne({where: {username: req.body.username }}).then((person) => {
        if(person){
          console.log('That username is taken. Please try another username.');
          res.status(404).send(err);
        } else {
          User.create({
            username: req.body.username,
            password: hash
          })
          .then((newUser) => {
            res.status(201).send(newUser);
          })
        }
      });
    });
  });
};


var login = function(req, res){
  User.findOne({where: {username: req.params.username }}).then((user) => {
    if(user){
      bcrypt.compare(req.params.password, user.password, function(err, data){
        if(data){
          console.log("User Logged In");
          res.status(200).send(user);
        } else {
          console.log('Invalid Login Credentials');
          res.status(404).send(err);
        }
      });
    } else {
      console.log('Invalid Login Credentials');
      res.send('Invalid Login Credentials');
    }
  });
}


module.exports = {
  signUp,
  login
}
