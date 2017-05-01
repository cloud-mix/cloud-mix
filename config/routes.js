var router = require('express').Router();
var passport = require('passport');
var songsController = require('../controllers/songs');
var usersController = require('../controllers/users');


//Signup
router.post('/signup', usersController.signUp);

//Login
router.get('/users/:username/:password', usersController.login);

//Post To Amazon S3 And Then To DB
router.post('', songsController.postSongsToAWSAndDB);

//Get Songs From DB
router.get('', songsController.getSongsFromDB);

module.exports = router;
