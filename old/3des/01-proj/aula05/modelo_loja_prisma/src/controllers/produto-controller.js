const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) => {
    let produto = await prisma.produtos.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

const update = async (req, res) => {
    let produto = await prisma.produtos.update({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const remove = async (req, res) => {
    let produto = await prisma.produtos.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(produto).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}