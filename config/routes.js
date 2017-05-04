var router = require('express').Router();
var songsController = require('../controllers/songs');
var usersController = require('../controllers/users');

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


module.exports = router;
