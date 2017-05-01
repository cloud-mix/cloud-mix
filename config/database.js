require('dotenv').config();
require('dotenv').load();

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
