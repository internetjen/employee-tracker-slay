const mysql =  require('mysql2');
require('dotenv').config();

//create conection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'company_db'
});

module.exports = db;