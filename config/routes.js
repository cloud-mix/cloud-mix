var router = require('express').Router();
var songsController = require('../controllers/songs');
var usersController = require('../controllers/users');
var amazonsController = require('../controllers/amazon');

//Signup
router.post('/signup', usersController.signUp);

//Login
router.get('/users/:username/:password', usersController.login);

//Post To Amazon S3 And Then To DB
router.post('/songs', songsController.postSongsToDB);

//Get Songs From DB
// router.get('', songsController.getSongsFromDB);



router.post('/upload', amazonsController.uploader);

module.exports = router;
