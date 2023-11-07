var professores = []

const criar = (req, res) => {
    professores.push(req.body)
    res.status(201).end()
}

const listar = (req, res) => {
    res.status(200).json(professores).end()
}

module.exports={
    criar,
    listar
}