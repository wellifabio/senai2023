require('dotenv').config();
const USER = process.env.USER || 'admin'
const USER_PASSWD = process.env.USER_PASSWD || '1234'
const Receita = require('../models/receita');

const login = (req, res) => {
    if (req.body.email == USER && req.body.senha == USER_PASSWD) {
        res.redirect('/'+USER)
    } else {
        res.redirect('/?erro=Email ou senha invalidos')
    }
}

const create = (req, res) => {
    let newReceita = new Receita(req.body)
    newReceita.save(err => {
        if (err) {
            res.status(500).send("Erro = " + err)
        } else {
            res.redirect('/admin')
        }
    });
}

const admin = async (req, res) => {
    if (req.params.user == USER) {
        let receitas = await Receita.find()
        res.render('admin', { receitas })
    } else
        res.redirect('/')
}

const read = async (req, res) => {
    let receitas = await Receita.find()
    res.render('index', { receitas })
}

const update = (req, res) => {
    Receita.findOneAndUpdate({ '_id': req.params.id }, req.body, { runValidators: true })
        .then(() => { res.redirect('/') })
        .catch(err => { res.status(500).send(err) })
}

const del = (req, res) => {
    Receita.findOneAndRemove({ '_id': req.params.id })
        .then(res.redirect('/'))
        .catch(err => { res.status(500).send(err) });
}

module.exports = {
    login,
    admin,
    create,
    read,
    update,
    del
}