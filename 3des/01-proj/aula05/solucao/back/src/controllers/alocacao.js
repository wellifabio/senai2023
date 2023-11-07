const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const readAll = async (req, res) => {
    let alocacao = await prisma.alocacao.findMany({
        where: {
            quantidade: {
                gte: 0
            }
        },
    });
    res.status(200).json(alocacao).end();
}

const readArea = async (req, res) => {
    let alocacao = await prisma.alocacao.groupBy({
        by: ['area'],
        where: {
            quantidade: {
                gte: 0
            }
        },
    });
    res.status(200).json(alocacao).end();
}

module.exports = {
    readAll,
    readArea
}