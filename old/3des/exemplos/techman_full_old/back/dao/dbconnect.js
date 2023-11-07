const mysql = require('mysql2');
const con = mysql.createConnection({
    "user": process.env.DB_USER,
    "host":process.env.DB_HOST,
    "database": process.env.DB_NAME,
    "port":process.env.DB_PORT,
});

module.exports = {
    con
}