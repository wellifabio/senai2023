const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const read = async (req, res) => {
    if (req.params.automovelId == undefined) {
        let concessionarias = await prisma.concessionaria.findMany({
            select: {
                "id": true,
                "nome": true,
            }
        });
        res.status(200).json(concessionarias).end();
    } else {
        let concessionarias = await prisma.concessionaria.findMany({
            select: {
                "id": true,
                "nome": true,
                "alocacoes": true
            },
            where: {
                "alocacoes": {
                    some: {
                        "automovelId": {
                            equals: parseInt(req.params.automovelId)
                        }
                    }
                }
            }
        });
        res.status(200).json(concessionarias).end();
    }
}

module.exports = {
    read
}