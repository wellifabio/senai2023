const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let publicacao = await prisma.publicacao.create({
        data: req.body
    });

    res.status(200).json(publicacao).end();
}

const read = async (req, res) => {
    let publicacoes = await prisma.publicacao.findMany();

    res.status(200).json(publicacoes).end();
}

module.exports = {
    create,
    read
}