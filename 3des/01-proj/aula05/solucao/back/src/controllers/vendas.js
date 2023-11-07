const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const read = async (req, res) => {
    const vendas = await prisma.vendas.findMany();
    res.json(vendas);
}

const create = async (req, res) => {
    const { alocacaoId, clienteId, concessionariaId } = req.body;
    const venda = await prisma.vendas.create({
        data: {
            alocacaoId: Number(alocacaoId),
            clienteId: Number(clienteId),
            concessionariaId: Number(concessionariaId),
        }
    });
    await updateQuantidade(alocacaoId);
    res.status(201).json(venda).end;
}

const updateQuantidade = async (alocacaoId) => {
    const alocacao = await prisma.alocacao.findUnique({
        where: {
            id: Number(alocacaoId)
        }
    });
    const quantidade = alocacao.quantidade - 1;
    await prisma.alocacao.update({
        where: {
            id: Number(alocacaoId)
        },
        data: {
            quantidade: quantidade
        }
    });
}

module.exports = {
    read,
    create
}