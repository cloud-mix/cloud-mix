// var passport = require('passport');
// var User = require('../models/user');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const googleClientId = process.env.GOOGLE_CLIENT_ID;
// const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
// const googleCallbackURL = process.env.GOOGLE_CLIENT_CALLBACK;
// var findOrCreate = require('mongoose-findorcreate');
// var FACEBOOK_ID = process.env.FACEBOOK_APP_ID;
// var FACEBOOK_SECRET = process.env.FACEBOOK_APP_SECRET;
// var FACEBOOK_URL = process.env.FACEBOOK_CALLBACK_URL;

// // configure serializeUser
// passport.serializeUser(function(user, done){
//   done(null, user.id);
// });

// //configure deserializeUser
// passport.deserializeUser(function(id, done){
//   User.findById(id, function(err, user){
//     done(err, user);
//   });
// });


// //GOOGLE STRATEGY
// passport.use(new GoogleStrategy({
//   clientID: googleClientId,
//   clientSecret: googleClientSecret,
//   callbackURL: googleCallbackURL,
//   profileFields: ['id', 'name', 'email']
// },

// function(accessToken, refreshToken, profile, done){
//   User.findOrCreate({ googleId: profile.id, username: profile.name.givenName + ' ' + profile.name.familyName, email: profile.emails[0].value }, function(err, account){
//     return done(err, account);
//   });
// }));


// //FACEBOOK STRATEGY
// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_ID,
//     clientSecret: FACEBOOK_SECRET,
//     callbackURL: FACEBOOK_URL,
//     profileFields: ['id', 'name', 'email']
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id, username: profile.name.givenName + ' ' + profile.name.familyName, email: profile.emails[0].value }, function (err, user) {
//       console.log(profile);
//       console.log('SUCCESSFULLY REACHED CALLBACK with user of: ', user);
//       console.log('SUCCESSFULLY REACHED CALLBACK with error of: ', err);

//       return cb(err, user);
//     });
//   }
// ));
