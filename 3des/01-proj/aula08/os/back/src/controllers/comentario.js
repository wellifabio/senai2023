const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    if (req.params.id != null) {
        const comentarios = await prisma.comentario.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(comentarios);
    } else{
        const comentarios = await prisma.comentario.findMany();
        return res.json(comentarios);
    }
}

const create = async (req, res) => {
    const data = req.body;
    const comentario = await prisma.comentario.create({
        data: data
    });
    return res.status(201).json(comentario).end();
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let comentario = await prisma.comentario.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(comentario).end();
    } catch (error) {
        res.status(400).json({ erro: error }).end();
    }
}

const del = async (req, res) => {
    try {
        let comentario = await prisma.comentario.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(comentario).end();
    } catch (error) {
        if (error.code == "P2025")
            res.status(404).end();
        else
            res.status(400).json({ erro: error }).end();
    }
}

module.exports = {
    read,
    create,
    update,
    del
};