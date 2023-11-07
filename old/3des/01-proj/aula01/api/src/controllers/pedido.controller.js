const Pedido = require('../models/pedido.model');
const con = require('./pedidos.dao');

const create = async (req, res) => {
    let string = Pedido.create(req.body);
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const read = (req, res) => {
    let string = Pedido.read(req.params.id);
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const readAll = (req, res) => {
    let string = Pedido.readAll();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const readAtivos = (req, res) => {
    let string = Pedido.readAtivos();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}
const readCozinha = (req, res) => {
    let string = Pedido.readCozinha();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}
const readEntrega = (req, res) => {
    let string = Pedido.readEntrega();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const readEntregaPorEntregador = (req, res) => {
    let string = Pedido.readEntregaPorEntregador(req.params.id);
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const update = (req, res) => {
    let string = Pedido.update(req.body);
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
const toEntrega = (req, res) => {
    let string = Pedido.toEntrega(req.params.id);
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
const toEnd = (req, res) => {
    let string = Pedido.toEnd(req.params.id);
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
    let string = Pedido.del(req.params.id);
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
    read,
    readAll,
    readAtivos,
    readCozinha,
    readEntrega,
    readEntregaPorEntregador,
    update,
    toEntrega,
    toEnd,
    del
}