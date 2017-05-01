// var mongoose = require('mongoose');
require('dotenv').config();
require('dotenv').load();
// var env = require('./environment');

// // Use different database URIs based on whether an env var exists.
// var dbUri = process.env.MLAB_URI ||
//             'mongodb://localhost/' + process.env.SAFE_TITLE;


// if (!env.MLAB_URI) {
//   // check that MongoD is running...
//   require('net').connect(27017, 'localhost').on('error', function() {
//     console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
//     process.exit(0);
//   });
// }

// if (!mongoose.connection._hasOpened) {
//   console.log(dbUri);
//   mongoose.connect(dbUri);
//   console.log('db connected to node project: ', process.env.SAFE_TITLE);
// };

// module.exports = mongoose;



var Sequelize = require('sequelize');
let db = null;

if(process.env.DATABASE_URL){
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
  });
  console.log('Connected to remote db');
} else {
  db = new Sequelize('cloud_mix', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  console.log('connected to db locally');
}


module.exports = db;
