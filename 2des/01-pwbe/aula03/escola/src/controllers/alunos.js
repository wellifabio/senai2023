const Aluno = require('../models/aluno');
const Turmas = require('./turmas');

var alunos = []

const teste = (req,res)=>{
    res.json(Turmas.turmas).end()
}

const criar = (req, res) => {
    let { nome, nascto, id_turma } = req.body;

    loc = false;
    let arr = Turmas.turmas;

    if(arr.length > 0) {
        arr.forEach((turma, index) => {
            if(turma.id == id_turma) {
                loc = true;
            }
        })
    }

    if(!loc) { 
        res.status(404).json({message : "Turma não encontrada"}).end();
        return;
    }
    
    let ra = 1;

    if(alunos.length > 0) {
        ra = alunos[alunos.length-1].ra + 1;
    }

    //const aluno = new Aluno(ra, req.body.nome, req.body.nascto)
    const aluno = new Aluno(ra, nome, nascto, id_turma);

    alunos.push(aluno);

    res.status(201).end();
}

const criarVarios = (req, res) => {
    let data = req.body;
    let ra = 1;

    if(alunos.length > 0) {
        ra = alunos[alunos.length-1].ra + 1;
    }

    data.forEach((item, index) => {
        let aluno = new Aluno(ra, item.nome, item.nascto);

        alunos.push(aluno);

        ra++;
    })

    res.status(201).end();
}

const listar = (req, res) => {
    res.status(200).json(alunos).end()
}

const buscar = (req, res) => {
    let { ra } = req.params;

    // for(let i = 0; i < alunos.length; i++) {
    //     if(alunos[i].ra == ra) {
    //         res.status(200).json(alunos[i]).end();
    //     }
    // }

    alunos.forEach((aluno, index) => {
        if(aluno.ra == ra) {
            res.status(200).json(aluno).end();
        }
    });

    //`SELECT * FROM alunos WHERE ra = ${ra}`

    res.status(404).end();
}

const atualizar = (req, res) => {
    let { nome, nascto } = req.body;
    let { ra } = req.params;

    alunos.forEach((aluno, index) => {
        if(aluno.ra == ra) {   
            alunos[index] = new Aluno(ra, nome, nascto);
            res.status(200).json(alunos[index]).end();
        }
    })

    // for(let i = 0; i < alunos.length; i++) {
    //     let aluno = alunos[i];
    //     if(aluno.ra == ra) {
    //         alunos[i] = new Aluno(ra, nome, nascto);
    //         res.status(200).json(alunos[i]).end();
    //     }
    // }

    res.status(404).end();
}

const deletar = (req, res) => {
    let {ra} = req.params; //2

    alunos.forEach((aluno, index) => {
        if(aluno.ra == ra) {
            alunos.splice(index, 1);
        }
    });

    res.status(200).json(alunos).end();
}

module.exports={
    teste,
    criar,
    listar,
    buscar,
    atualizar,
    deletar,
    criarVarios,
    alunos
}