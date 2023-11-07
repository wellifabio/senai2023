const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const iniciar = async (req, res) => {
    res.render('index')
}

const login = async (req, res) => {
    if (!isNaN(req.body.pin) && !isNaN(req.body.matricula)) {
        let colaborador = await prisma.colaborador.findMany({
            where: {
                AND: [{ matricula: Number(req.body.matricula) }, { pin: Number(req.body.pin) }]
            }
        })
        if (colaborador.length > 0) {
            let dados = await read(req.body.matricula)
            res.render('oss', dados)
        } else {
            res.redirect('/?msg=Matrícula ou PIN incorretos!')
        }
    } else {
        res.redirect('/?msg=Matrícula ou PIN incorretos!')
    }
}

const recarrega = async (req, res) => {
    let dados = await read(req.query.matricula)
    res.render('oss', dados)
}

const read = async (matricula) => {
    let colaborador = await prisma.colaborador.findMany({
        where: {
            matricula: Number(matricula)
        },
        select: {
            matricula: true,
            nome: true,
            cargo: true,
            setor: true,
            pin: true,
            abertas: {
                select: {
                    id: true,
                    descricao: true,
                    colaborador: true,
                    executor: true,
                    abertura: true,
                    encerramento: true,
                    comentarios: true
                }
            },
            executadas: {
                where: {
                    encerramento: null
                },
                select: {
                    id: true,
                    descricao: true,
                    colaborador: true,
                    executor: true,
                    abertura: true,
                    encerramento: true,
                    comentarios: true
                }
            }
        }
    })
    let executores = await prisma.colaborador.findMany({
        where: {
            setor: "Manutencao"
        },
        select: {
            matricula: true,
            nome: true
        }
    })
    return { colaborador: colaborador[0], executores: executores }
}

module.exports = {
    iniciar,
    login,
    recarrega
}