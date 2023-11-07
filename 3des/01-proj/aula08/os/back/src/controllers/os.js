const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    if (req.params.id != null) {
        const oss = await prisma.OS.findUnique({
            select: {
                id: true,
                descricao: true,
                colaborador: true,
                executor: true,
                abertura: true,
                encerramento: true,
                comentarios: true
            },
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(oss);
    } else {
        const oss = await prisma.OS.findMany();
        return res.json(oss);
    }
}

const readOpen = async (req, res) => {
    const oss = await prisma.OS.findMany({
        where: {
            encerramento: null
        }
    });
    return res.json(oss);
}

const readClosed = async (req, res) => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const oss = await prisma.OS.findMany({
        where: {
            NOT: {
                encerramento: null
            },
            abertura: {
                gte: firstDayOfMonth,
                lte: lastDayOfMonth,
            }
        }
    });
    return res.json(oss);
}

const create = async (req, res) => {
    const data = req.body;
    const os = await prisma.OS.create({
        data: data
    });
    return res.status(201).json(os).end();
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let os = await prisma.OS.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(os).end();
    } catch (error) {
        res.status(400).json({ erro: error }).end();
    }
}

const del = async (req, res) => {
    try {
        let os = await prisma.OS.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(os).end();
    } catch (error) {
        if (error.code == "P2025")
            res.status(404).end();
        else
            res.status(400).json({ erro: error }).end();
    }
}

module.exports = {
    read,
    readOpen,
    readClosed,
    create,
    update,
    del
};