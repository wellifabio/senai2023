require('dotenv').config();
var Receita = require('../models/receita.model');

const teste = function (req, res) {
    res.json("API receitas, com banco de dados NoSQL MongoDB").end();
};

const login = (req, res) => {
    if (req.body.email == process.env.USER)
        if (req.body.password == process.env.USER_PASSWD)
            res.status(202).json("admin").end();
        else
            res.status(404).json("password inválido").end();
    else
        res.status(404).json("Email inválido").end();
}

const create = (req, res) => {
    let receita = new Receita(
        {
            nome: req.body.nome,
            tipo: req.body.tipo,
            ingredientes: req.body.ingredientes,
            modoPreparo: req.body.modoPreparo,
            foto: req.body.foto
        }
    );
    receita.save(function (err) {
        if (err) {
            res.status(500).json({ erro: err }).end();
        } else {
            res.status(201).end();
        }
    });
};

const readAll = (req, res) => {
    Receita.find({}, (err, receitas) => {
        if (err) res.status(500).json({ erro: err }).end();
        else res.json(receitas).end();
    });
}

const read = (req, res) => {
    Receita.findById(req.params.id, (err, receita) => {
        if (err) {
            res.status(404).json({ erro: err }).end();
        } else {
            res.json(receita).end();
        }
    });
}

const update = (req, res) => {
    Receita.findOneAndUpdate(
        {
            '_id': req.params.id
        },
        {
            nome: req.body.nome,
            tipo: req.body.tipo,
            ingredientes: req.body.ingredientes,
            modoPreparo: req.body.modoPreparo,
            foto: req.body.foto
        },
        {
            new: true,
            runValidators: true
        })
        .then(resp => {
            if (resp)
                res.status(200).json({ resposta: resp }).end();
            else
                res.status(404).json({ resposta: resp }).end();
        })
        .catch(err => {
            res.status(500).json({ erro: err }).end();
        })
}

const del = (req, res) => {
    Receita.findOneAndRemove({ '_id': req.params.id })
        .then(resp => {
            if (resp)
                res.status(200).json({ resposta: resp }).end();
            else
                res.status(404).json({ resposta: resp }).end();
        })
        .catch(err => {
            res.status(500).json({ erro: err }).end();
        });
}

module.exports = {
    teste,
    create,
    readAll,
    read,
    update,
    del,
    login
}