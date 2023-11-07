const Entregador = require('../models/entregador.model');
const con = require('./pedidos.dao');

const create = async (req, res) => {
    let string = Entregador.create(req.body);
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const login = async (req, res) => {
    let string = Entregador.login(req.body);
    con.query(string, (err, result) => {
        if(result.length > 0) {
            if (err == null) {
                res.json(result).end();
            }else
                res.status(400).json(err).end();
        }else{
            res.status(404).end();
        }

    });
}

const read = (req, res) => {
    let string = Entregador.read(req.params.id);
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const readAll = (req, res) => {
    let string = Entregador.readAll();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const update = (req, res) => {
    let string = Entregador.update(req.body);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const del = (req, res) => {
    let string = Entregador.del(req.params.id);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


module.exports = {
    create,
    login,
    read,
    readAll,
    update,
    del
}