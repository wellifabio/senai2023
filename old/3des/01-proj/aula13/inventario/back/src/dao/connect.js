const mysql = require('mysql')
const fs = require('fs')

const con = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PT,
    ssl: {
        ca: fs.readFileSync(process.env.SSL_CA)
    }
});

module.exports = con;