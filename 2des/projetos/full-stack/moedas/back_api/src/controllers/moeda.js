const con = require('../dao/connect')
const Moeda = require('../models/moeda')

const teste = (req, res) => {
    res.json('Servidor Online').end();
}

const listar = (req, res) => {
    const moeda = new Moeda(req.params);
    con.query(moeda.listar(), (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            if (rows.length > 0) {
                res.json(rows);
            } else {
                res.status(404);
            }
        }
    });
}

const criar = (req, res) => {
    const moeda = new Moeda(req.body);
    con.query(moeda.criar(), (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(201).end();
        }
    });
}

const alterar = (req, res) => {
    const moeda = new Moeda(req.body);
    con.query(moeda.update(), (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            if (rows.affectedRows > 0) {
                res.status(202).end();
            } else {
                res.status(404).end();
            }
        }
    });
}

const excluir = (req, res) => {
    const moeda = new Moeda(req.params);
    con.query(moeda.delete(), (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            if (rows.affectedRows > 0) {
                res.status(204).end();
            } else {
                res.status(404).end();
            }
        }
    });
}

module.exports = {
    teste,
    listar,
    criar,
    alterar,
    excluir
}