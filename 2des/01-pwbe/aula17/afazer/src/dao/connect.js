const mysql = require('mysql')
const fs = require('fs')

const con = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'afazer',
    user: process.env.USER || 'root',
    timezone:'utc'
    // password: process.env.PASSWORD,
    // port: process.env.PT,
    // ssl: {
    //     ca: fs.readFileSync(process.env.SSL_CA)
    // }
});

module.exports = con;