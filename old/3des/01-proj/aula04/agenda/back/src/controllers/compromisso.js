const Compromisso = require('../models/compromisso');

const teste = async function (req, res) {
    res.json('API Ok, aguardando requisição').end();
};

const create = (req, res) => {
    const newCompromisso = new Compromisso(req.body)
    newCompromisso.save(err => {
        if (err) {
            res.status(500).json({ erro: err }).end();
        } else {
            res.status(201).end();
        }
    });
}

const readAll = function (req, res) {
    Compromisso.find({}, (err, compromissos) => {
        if (err) res.status(500).json({ erro: err }).end();
        else res.json({ Compromissos: compromissos }).end();
    });
}

const readId = function (req, res) {
    Compromisso.findById(req.params.id, (err, compromisso) => {
        if (err) {
            res.status(404).json({ erro: err }).end();
        } else {
            res.json(compromisso).end();
        }
    });
}

const update = function (req, res) {
    Compromisso.findOneAndUpdate(
        {
            '_id': req.params.id            //Busca
        },
        req.body,                           //Dados de atualização
        {
            new: true,                       // retorne o doc atualizado
            runValidators: true              // valide antes de atualizar
        })
        .then(resp => {
            if (resp)
                res.status(202).json({ resposta: resp }).end();
            else
                res.status(404).json({ resposta: resp }).end();
        })
        .catch(err => {
            res.status(500).json({ erro: err }).end();
        })
}

const del = function (req, res) {
    Compromisso.findOneAndRemove({ '_id': req.params.id })
        .then(resp => {
            if (resp)
                res.status(204).json({ resposta: resp }).end();
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
    readId,
    update,
    del
}