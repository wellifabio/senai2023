const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const criar = async (req, res) => {
    let parse = {
        comentario: req.body.comentario,
        os: Number(req.body.id),
        colaborador: Number(req.body.matricula),
    }
    let os = await prisma.comentario.create({
        data: parse
    })
    res.redirect('/login?matricula='+req.body.matricula)
}

module.exports = {
    criar
}