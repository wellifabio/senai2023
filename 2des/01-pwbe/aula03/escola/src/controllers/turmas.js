const Alunos = require('./alunos');

var turmas = [];

const criar = (req, res) => {
    let { nome } = req.body;
    
    let id = 1;

    if(turmas.length > 0) {
        id = turmas[turmas.length-1].id + 1;
    }

    //const aluno = new Aluno(ra, req.body.nome, req.body.nascto)
    const turma = {
        id,
        nome
    }

    turmas.push(turma);

    res.status(201).end();
}

const listar = (req, res) => {
    turmas.forEach((turma, i) => {
        turmas[i].alunos = [];
        if(Alunos.alunos != undefined) {
            Alunos.alunos.forEach((item, index) => {
                if(item.idTurma == turma.id) {
                    turmas[i].alunos.push(item);
                }
            })
        }
    })

    res.status(200).json(turmas).end();
}

module.exports = {
    criar,
    listar,
    turmas
}