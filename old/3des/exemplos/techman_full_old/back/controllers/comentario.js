const { con } = require('../dao/dbconnect.js');
var string;

const doGet = (req, res) => {
    string = 'select * from vw_comentarios where id = ' + req.params.id + '';
    con.query(string, (err, result) => {
        let vetor = [];
        result.forEach(e => {
            vetor.push(e)
        })
        res.json(vetor)
    })
}

const doGetAll = (req, res) => {
    string = 'select * from vw_comentarios';
    con.query(string, (err, result) => {
        let vetor = [];
        result.forEach(e => {
            vetor.push(e)
        })
        res.json(vetor)
    })
}

const doPost = (req, res) => {
    let comentario = '\'' + req.body.comentario + '\'';
    let equipamento = req.body.equipamento;
    let perfil = req.body.perfil;

    let string = `insert into comentarios values (default,${comentario},${equipamento},${perfil},now());`;
    con.query(string, (err, result) => {
        if (err != null) {
            res.status(400).end()
        } else {
            res.status(201).end()
        }
    })
}

const doDelete = (req, res) => {
    let string = 'delete from comentarios where id = ' + req.params.id
    con.query(string, (err, result) => {
        if (result.affectedRows == 0) {
            res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
}

module.exports = {
    doGet, doGetAll, doPost, doDelete
}