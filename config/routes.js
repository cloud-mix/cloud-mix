var router = require('express').Router();
var songsController = require('../controllers/songs');
var usersController = require('../controllers/users');
var amazonsController = require('../controllers/amazon');
// var multipart = require('connect-multiparty');
// var multipartMiddleware = multipart();
var multer = require('multer');

var upload = multer({ dest: __dirname + '/public/uploads/' });
var type = upload.single('upl');

//Signup
router.post('/signup', usersController.signUp);

//Login
router.get('/users/:username/:password', usersController.login);

//Get all songs
router.get('/songs', songsController.getSongs);

//Get most recent songs
router.get('/recent', songsController.getMostRecentSongs);

//Get closest to be completed
router.get('/soon', songsController.getSoonToBeCompleted);

//Create a song
router.post('/songs', songsController.postSong);

//Update a song
router.put('/songs', songsController.updateSong);


// router.post('/upload', type, amazonsController.uploader);

module.exports = router;
