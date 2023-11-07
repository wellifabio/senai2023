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

        if (colaborador.length > 0)
            res.render('oss', { colaborador: colaborador[0], executores: executores });
        else {
            res.redirect('/?erro=Matrícula ou PIN incorretos!')
        }
    } else {
        res.redirect('/?erro=Matrícula ou PIN incorretos!')
    }
}

module.exports = {
    iniciar,
    login
}