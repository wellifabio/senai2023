const Comissao = require('../models/comissao');
const Vendas = require('../models/vendas');

const con = require('../connection');

const comissao = (req, res) => {
    con.query(`SELECT vendedores.nome, vendedores.matricula, SUM(vendas.quantidade * produtos.valor) AS total FROM vendas
    INNER JOIN vendedores ON vendas.vendedorId = vendedores.id
    INNER JOIN produtos ON vendas.produtoId = produtos.id
    GROUP BY vendedores.id`, (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            let comissoes = rows.map(vendedor => {
                return new Comissao(vendedor);
            })
            res.status(200).json(comissoes).end();
        }
    });
}

const vendas = (req, res) => {
    con.query(`SELECT vendas.data, produtos.nome AS produto, vendas.quantidade, vendedores.nome AS vendedor FROM vendas
    INNER JOIN vendedores ON vendas.vendedorId = vendedores.id
    INNER JOIN produtos ON vendas.produtoId = produtos.id`, (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            let vendas = rows.map(venda => {
                return new Vendas(venda);
            })
            res.status(200).json(vendas).end();
        }
    });
}

const geralVendas = (req, res) => {
    con.query(`SELECT SUM(vendas.quantidade * produtos.valor) AS total FROM vendas
    INNER JOIN produtos ON vendas.produtoId = produtos.id`, (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(200).json(rows[0]).end();
        }
    });
}

module.exports = {
    comissao,
    vendas,
    geralVendas
}