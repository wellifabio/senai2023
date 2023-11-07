const mysql = require('mysql')

const con = mysql.createConnection({
    user: 'root',
    host: 'locahost',
    database: 'petshop'
});

module.exports = con;