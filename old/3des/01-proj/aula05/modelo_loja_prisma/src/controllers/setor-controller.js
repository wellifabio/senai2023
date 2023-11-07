const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.setor.create({
        data: req.body
    });

    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setores = await prisma.setor.findMany({
        select: {
            id: true,
            nome: true,
            comissao: true,
            vendedores: true,
            produtos: true,
        }
    });

    res.status(200).json(setores).end();
}

const update = async (req, res) => {
    let setor = await prisma.setor.update({
        data: req.body
    });

    res.status(200).json(setor).end();
}

const remove = async (req, res) => {
    let setor = await prisma.setor.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}