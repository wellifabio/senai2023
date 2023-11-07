const con = require('../dao/connect')
const Task = require('../models/tarefa')

const cadastrar = (req, res) => {
    con.query(new Task(req.body).create(), (err, result) => {
        if (err == null)
            res.redirect('/')
        else
            res.status(500).send(err)

    })
}

const listar = (req, res) => {
    con.query(new Task(req.params).read(), (err, result) => {
        if (err == null)
            res.render('index', { titulo: "Tarefas a fazer", tasks: result });
        else
            res.render('index', { titulo: "Tarefas a fazer" });

    })
}

const alterar = (req, res) => {
    con.query(new Task(req.body).update(), (err, result) => {
        if (result.affectedRows > 0)
            res.redirect('/')
        else
            res.status(500).send(err)
    })
}

const excluir = (req, res) => {
    con.query(new Task(req.params).delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.redirect('/')
        else
            res.status(500).send(err)
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
}