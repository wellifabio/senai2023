const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const read = async (req, res) => {
    let alocacao = await prisma.automoveis.findMany({
        select: {
            "id": true,
            "modelo": true,
            "preco": true,
            "alocacoes": true
        }
    });
    res.status(200).json(alocacao).end();
}

const readArea = async (req, res) => {
    let alocacao = await prisma.automoveis.findMany({
        select: {
            "id": true,
            "modelo": true,
            "preco": true,
            "alocacoes": true
        },
        where: {
            "alocacoes": {
                every: {
                    "area": {
                        equals: parseInt(req.params.area)
                    },
                    "quantidade": {
                        gte: 0
                    }
                }
            }
        }
    });
    res.status(200).json(alocacao).end();
}

module.exports = {
    read,
    readArea
}