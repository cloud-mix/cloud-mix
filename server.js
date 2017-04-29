var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var debug        = require('debug')('app:http');
var session      = require('express-session');
var passport     = require('passport');
var User         = require("./models/user");
var request      = require('request');
var html = require('html');
require('dotenv').config();
require('dotenv').load();

// Load local libraries.
var env      = require('./config/environment');
var mongoose = require('./config/database');
var routes   = require('./config/routes');

// Instantiate a server application.
var app = express();

app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);

// Helper layer (parses the requests, and adds further data).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/database');
require('./config/passport');

// Create local variables for use thoughout the application.
app.use(session({
 secret: 'delectico',
 resave: false,
 saveUninitialized: true
}));

// Logging layer.
app.use(logger('dev'));

// Routes to static assets. Uncomment below if you have a favicon.
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

//PASSPORT MiddleWare
app.use(passport.initialize());
app.use(passport.session({
  secret: 'notsosecretnowareyou',
  name: 'passport_cookie',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.session());
console.log(passport.session());

// Useful for debugging the state of requests.
app.use(debugReq);

// Defines all of our "dynamic" routes.
app.use('/', routes);

app.listen(8080);

// Catches all 404 routes.
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});

// Error-handling layer.
app.use(function(err, req, res, next) {
 // In development, the error handler will print stacktrace.
 err = (app.get('env') === 'development') ? err : {};
 res.status(err.status || 500);
 res.render('error', {
   message: err.message,
   error: err
 });
});

function debugReq(req, res, next) {
 debug('params:', req.params);
 debug('query:',  req.query);
 debug('body:',   req.body);
 next();
}

module.exports = app;
