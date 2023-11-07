
const mysql = require("mysql");

const USER = process.env.USER || 'root';
const PASSWORD = process.env.PASSWORD || '';

const con = mysql.createConnection({
    host: 'localhost',
    database: 'pedidos',
    user: USER,
    password: PASSWORD
});

module.exports = con;