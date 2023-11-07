const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.vendedores.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const read = async (req, res) => {
    let vendedores = await prisma.vendedores.findMany();
    res.status(200).json(vendedores).end();
}

const update = async (req, res) => {
    let vendedor = await prisma.vendedores.update({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const remove = async (req, res) => {
    let vendedor = await prisma.vendedores.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(vendedor).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}