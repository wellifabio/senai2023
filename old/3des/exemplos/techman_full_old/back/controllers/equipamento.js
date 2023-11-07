const { con } = require('../dao/dbconnect.js');
var string;

const doGet = (req, res) => {
    string = 'select * from equipamentos where id = "' + req.params.id + '"';
    con.query(string, (err, result) => {
        if (result != "") {
            res.json(result[0]);
        } else {
            res.status(404).end();
        }
    })
}

const doGetAll = (req, res) => {
    string = 'select * from equipamentos';
    con.query(string, (err, result) => {
        let vetor = [];
        result.forEach(e => {
            vetor.push(e)
        })
        res.json(vetor)
    })
}

const doPost = (req, res) => {
    let equipamento = '\'' + req.body.equipamento + '\'';
    let imagem = '\'' + req.body.imagem + '\'';
    let descricao = '\'' + req.body.descricao + '\'';
    let ativo = req.body.ativo;
    let string = `insert into equipamentos values (default,${equipamento},${imagem},${descricao},${ativo},curdate());`;
    con.query(string, (err, result) => {
        if (err != null) {
            res.status(400).end()
        } else {
            res.status(201).end()
        }
    })
}

const doDelete = (req, res) => {
    let string = 'delete from equipamentos where id = ' + req.params.id
    con.query(string, (err, result) => {
        if (err != null) {
            res.status(400).json(err).end()
        } else {
            if (result.affectedRows == 0) {
                res.status(404).end()
            }else{
                res.status(200).end()
            }
        }

    })
}

module.exports = {
    doGet, doGetAll, doPost, doDelete
}