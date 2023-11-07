const Compromisso = require('../models/compromisso');

const create = (req, res) => {
    const newCompromisso = new Compromisso(req.body)
    newCompromisso.save(err => {
        if (err) {
            res.status(500).send("Erro = " + err)
        } else {
            res.redirect('/')
        }
    });
}

const read = async (req, res) => {
    const compromissos = await Compromisso.find()
    res.render('index', { compromissos })
}

const update = (req, res) => {
    Compromisso.findOneAndUpdate({ '_id': req.params.id }, req.body, { runValidators: true })
        .then(() => { res.redirect('/') })
        .catch(err => { res.status(500).send(err) })
}

const del = (req, res) => {
    Compromisso.findOneAndRemove({ '_id': req.params.id })
        .then(res.redirect('/'))
        .catch(err => { res.status(500).send(err) });
}

module.exports = {
    create,
    read,
    update,
    del
}