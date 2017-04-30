var router = require('express').Router();
var passport = require('passport');
var songsController = require('../controllers/songs');
var usersController = require('../controllers/users');


//Signup
router.post('/signup', usersController.signUp);

//Login
router.get('/users/:username/:password', usersController.login);




// //HELPER FUNCTION FOR FACEBOOK AND GOOGLE PASSPORT
// router.get('/logout', function(req, res){
//   console.log(req.body);
//   req.logout();
//   res.redirect('/');
// });


// //GOOGLE PASSPORT AUTHENTICATION
// function authenticate(req, res, next) {
//   if(req.account) {
//     console.log(req.account);
//     next();
//   } else {
//     console.log(req.account);
//     res.redirect('/auth/google');
//   }
// };


// // FACEBOOK PASSPORT AUTHENTICATION
// function authenticate(req, res, next) {
//   if(req.user) {
//     // console.log(req);
//     next();
//   } else {
//     // console.log(req);
//     res.redirect('/auth/facebook');
//   }
// };


// //GOOGLE PASSPORT ROUTES
// router.get('/auth/google', passport.authenticate('google', { scope: ['email profile']}));

// router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' }), function(req, res){
//   res.redirect('/');
// });

// //FACEBOOK PASSPORT ROUTES
// router.get('/auth/facebook',
//   passport.authenticate('facebook', { scope: ['public_profile', 'email', 'user_likes', 'publish_actions'] }));

// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     console.log('SUCESSSSSSSSS GO BACK HOME')
//     res.redirect('/');
//   });


module.exports = router;
