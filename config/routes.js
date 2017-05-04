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

//Post To Amazon S3 And Then To DB
router.post('/songs', songsController.postSong);

//Get Songs From DB
// router.get('', songsController.getSongsFromDB);



router.post('/upload', type, amazonsController.uploader);

module.exports = router;
