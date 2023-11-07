const con = require('../dao/connect')
const Tarefa = require('../models/tarefa')

//Métodos CRUD (Integração entre BD e Front-End(Requisição e Resposta))
const cadastrar = (req, res) => {
    con.query(new Tarefa(req.body).create(), (err, result) => {
        if (err == null) {
            res.redirect('/')
        } else {
            res.render('erro', { err: err })
        }
    })
}

const app = (req, res) => {
    con.query(new Tarefa(req.body).read(), (err, result) => {
        if (err == null) {
            res.render('index', { titulo: "Tarefas a Fazer", dados: result })
        } else {
            res.render('erro', { err: err })
        }
    })
}

const alterar = (req, res) => {
    con.query(new Tarefa(req.body).update(), (err, result) => {
        if (result.affectedRows > 0)
            res.redirect('/')
        else
            res.render('erro', { err: err })
    })
}

const excluir = (req, res) => {
    con.query(new Tarefa(req.params).del(), (err, result) => {
        if (result.affectedRows > 0)
            res.redirect('/')
        else
            res.render('erro', { err: err })
    })
}

module.exports = {
    cadastrar,
    app,
    alterar,
    excluir
}