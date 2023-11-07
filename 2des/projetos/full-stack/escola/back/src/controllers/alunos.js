const con = require('../dao/connect')

const teste = (req, res) => {
    res.json("Escola Respondendo").end()
}
const listar = (req, res) => {
    con.query('SELECT * FROM aluno', (result, err) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.json(err).end()
        }
    })
}

const cadastrar = (req, res) => {
    let ra = req.query.ra
    let nome = req.query.nome
    let nascto = req.query.nascto
    let turma = req.query.turma
    let string = `INSERT INTO aluno VALUE('${ra}','${nome}','${nascto}',${turma})`
    con.query(string, (err, result) => {
        if (err == null)
            res.redirect('http://127.0.0.1:5500/front/form.html')
        else
            res.json(err).end()
    })
}

module.exports = {
    teste,
    cadastrar,
    listar
}