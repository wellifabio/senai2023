const { con } = require('../dao/dbconnect.js');
var string;

const doGet = (req, res) => {
    string = 'select * from usuarios where id = "' + req.params.id+'"';
       con.query(string, (err, result) => {
        if (result != "") {
            res.json(result[0]);
        } else {
            res.status(404).end();
        }
    })
}

const doGetAll = (req, res) => {
    string = 'select * from usuarios';
    con.query(string, (err, result) => {
        let vetor = [];
        result.forEach(e => {
            vetor.push(e)
        })
        res.json(vetor)
    })
}

const doPostlogin = (req, res) => {
    let senha = '\'' + req.body.senha + '\''
    string = `select * from vw_login where senha = ${senha};`;
    con.query(string, (err, result) => {
        if (result.length == 0) {
            res.status(404).end();
        } else {
            res.status(200).json(result[0]).end();
        }
    })
}

module.exports = {
    doGet, doGetAll, doPostlogin
}