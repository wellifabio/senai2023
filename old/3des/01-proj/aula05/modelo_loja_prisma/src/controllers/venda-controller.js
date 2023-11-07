const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const create = async (req, res) => {
    let { id_vendedor } = req.body;

    let venda = await prisma.vendas.create({
        data: {
            id_vendedor,
            data: new Date(),
            detalhes: {
                create: req.body.detalhes
            }
        }
    });

    res.status(200).json(venda).end();
}

const read = async (req, res) => {
    let vendas = await prisma.vendas.findMany({
        select: {
            data: true,
            vendedor: {
                select: {
                    nome: true,
                    id: true
                }
            },
            detalhes: {
                select: {
                    quantidade: true,
                    produto: true
                }
            }
        }
    });

    res.status(200).json(vendas).end();
}

const update = async (req, res) => {
    let venda = await prisma.vendas.update({
        data: req.body
    });

    res.status(200).json(venda).end();
}

const remove = async (req, res) => {
    let venda = await prisma.vendas.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(venda).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}