const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let usuario = await prisma.usuario.create({
        data: req.body
    });

    res.status(200).json(usuario).end();
}

const readOne = async (req, res) => {
    let usuario = await prisma.usuario.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            email: true,
            publicacoes: true
        }
    });

    //SELECT * FROM usuario INNER JOIN publicacao ON usuario.id = publicacao.usuario_id WHERE ....

    res.status(200).json(usuario).end();
}

const read = async (req, res) => {
    let usuarios = await prisma.usuario.findMany({
        select: {
            email: true,
            nome: true
        }
    });

    //SELECT email, nome FROM usuario WHERE email = ''

    res.status(200).json(usuarios).end();
}

const login = async (req, res) => {
    let usuario = await prisma.usuario.findMany({
        where: {
            AND: [
                {email : req.body.email},
                {senha : req.body.senha}
            ]
        },
        select: {
            id: true,
            nome: true
        }
    })

    //SELECT id, nome FROM usuario WHERE email = '' AND senha = ''
    
    res.status(200).json(usuario[0]).end();
}

module.exports = {
    create,
    read,
    login,
    readOne
}