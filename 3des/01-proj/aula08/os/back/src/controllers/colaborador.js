const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    if (req.params.matricula != null) {
        const colaboradores = await prisma.colaborador.findUnique({
            select: {
                matricula: true,
                nome: true,
                cargo: true,
                setor: true,
                os_abertas: {
                    where: {
                        encerramento: null
                    }
                },
                os_executadas: {
                    where: {
                        encerramento: null
                    }
                }
            },
            where: {
                matricula: parseInt(req.params.matricula)
            }
        });
        return res.json(colaboradores);
    } else {
        const colaboradores = await prisma.colaborador.findMany();
        return res.json(colaboradores);
    }
}

const readCargo = async (req, res) => {
    const colaboradores = await prisma.colaborador.groupBy({
        by: ['cargo'],
        select: {
            cargo: true,
        }
    });
    return res.json(colaboradores);
}

const readSetor = async (req, res) => {
    const colaboradores = await prisma.colaborador.groupBy({
        by: ['setor'],
        select: {
            setor: true,
        }
    });
    return res.json(colaboradores);
}

const create = async (req, res) => {
    try {
        const data = req.body;
        const colaborador = await prisma.colaborador.create({
            data: data
        });
        return res.status(201).json(colaborador).end();
    } catch (error) {
        return res.status(400).json(error).end();
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let colaborador = await prisma.colaborador.update({
            data: data,
            where: {
                matricula: parseInt(req.body.matricula)
            }
        });
        res.status(202).json(colaborador).end();
    } catch (error) {
        res.status(400).json({ erro: error }).end();
    }
}

const del = async (req, res) => {
    try {
        let colaborador = await prisma.colaborador.delete({
            where: {
                matricula: parseInt(req.params.matricula)
            }
        });
        res.status(204).json(colaborador).end();
    } catch (error) {
        if (error.code == "P2025")
            res.status(404).end();
        else
            res.status(400).json({ erro: error }).end();
    }
}

const login = async (req, res) => {
    const colaboradores = await prisma.colaborador.findUnique({
        select: {
            matricula: true,
            nome: true,
            cargo: true,
            setor: true,
            os_abertas: {
                where: {
                    encerramento: null
                }
            },
            os_executadas: {
                where: {
                    encerramento: null
                }
            }
        },
        where: {
            matricula: parseInt(req.body.matricula),
            pin: parseInt(req.body.pin),
        }
    });
    if (colaboradores != null)
        return res.status(202).json(colaboradores).end();
    else
        return res.status(404).end();
}

module.exports = {
    read,
    readCargo,
    readSetor,
    create,
    update,
    del,
    login
};