const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Pagamento = require('../models/pagamento')

const modelarLista = (lista) => {
    for (i = 0; i < lista.length; i++)
        lista[i] = new Pagamento(lista[i], "ler")
    return lista
}

const criar = async (req, res) => {
    let pagamento = await prisma.pagamento.create({
        data: new Pagamento(req.body, "criar")
    })
    res.redirect('/')
}

const listar = async (req, res) => {
    let pagamentos = await prisma.pagamento.findMany({});
    res.render('index', { pagamentos: modelarLista(pagamentos) })
}

const alterar = async (req, res) => {
    let pagamento = await prisma.pagamento.update({
        data: new Pagamento(req.body, "alterar"),
        where: {
            matricula: Number(req.body.matricula)
        }
    });
    res.redirect('/')
}

const excluir = async (req, res) => {
    let pagamento = await prisma.pagamento.delete({
        where: {
            matricula: Number(req.params.matricula)
        }
    });
    res.redirect('/')
}

const filtroData = async (req, res) => {
    let pagamentos = await prisma.pagamento.findMany({
        where: {
            data: new Date(req.query.data)
        }
    });
    res.render('index', { pagamentos: modelarLista(pagamentos) })
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir,
    filtroData
}