const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const criar = async (req, res) => {
    let parse = {
        descricao: req.body.descricao,
        colaborador: Number(req.body.colaborador),
        executor: Number(req.body.executor)
    }
    let os = await prisma.os.create({
        data: parse
    })
    res.redirect('/login?matricula='+req.body.colaborador)
}

const alterar = async (req, res) => {
    let parse = {
        id: Number(req.body.id),
        descricao: req.body.descricao,
        executor: Number(req.body.executor)
    }
    let os = await prisma.os.update({
        data: parse,
        where: {
            id: Number(req.body.id)
        }
    });
    res.redirect('/login?matricula='+req.body.matricula)
}

const concluir = async (req, res) => {
    let os = await prisma.os.update({
        data: { encerramento: new Date() },
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/login?matricula='+req.body.matricula)
}

const excluir = async (req, res) => {
    let os = await prisma.os.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/login?matricula='+req.body.matricula)
}

module.exports = {
    criar,
    alterar,
    concluir,
    excluir
}