const mysql = require('mysql')

const con = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'avaliacao',
    user: process.env.USER || 'root',
    timezone: process.env.TMZ || 'utc'
});

module.exports = con;