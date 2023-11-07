const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const read = async (req, res) => {
    let clientes = await prisma.clientes.findMany({});
    res.status(200).json(clientes).end();
}

module.exports = {
    read
}