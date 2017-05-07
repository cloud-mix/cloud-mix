var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var debug = require("debug")("app:http");
var session = require("express-session");
var PORT = process.env.PORT || 8080; 

require("dotenv").config();
require("dotenv").load();

// Load local libraries.
var routes = require("./config/routes");

// Instantiate a server application.
var app = express();

// Helper layer (parses the requests, and adds further data).
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require("./config/database");

// Create local variables for use thoughout the application.
app.use(
  session({
    secret: "pwdsokool",
    resave: false,
    saveUninitialized: true
  })
);

// Logging layer.
app.use(logger("dev"));

// Routes to static assets. Uncomment below if you have a favicon.
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "html");

// Useful for debugging the state of requests.
app.use(debugReq);

// Defines all of our "dynamic" routes.
app.use("/", routes);

app.listen(PORT);

// Catches all 404 routes.
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

function debugReq(req, res, next) {
  debug("params:", req.params);
  debug("query:", req.query);
  debug("body:", req.body);
  next();
}

module.exports = app;
