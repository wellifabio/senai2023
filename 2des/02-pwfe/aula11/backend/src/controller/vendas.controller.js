const con = require('../connection');

const read = (req, res) => {
    con.query('SELECT * FROM vendas', (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(200).json(rows).end();
        }
    });
}

const create = (req, res) => {
    const { vendedorId, produtoId, quantidade } = req.body;

    const query = `INSERT INTO vendas VALUES (DEFAULT, DEFAULT, ${quantidade}, ${produtoId}, ${vendedorId})`;

    con.query(query, (err, data) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(201).json({
                id: data.insertId,
                data: Intl.DateTimeFormat('pt-BR', {dateStyle: 'short', timeStyle: 'short'}).format(new Date()),
                vendedorId,
                produtoId
            }).end();
        }
    })
}

const update = (req, res) => {
    const { id } = req.params;
    // const { vendedorId, produtoId, quantidade } = req.body;
    // const query = `UPDATE vendas SET quantidade = ${quantidade}, vendedorId = ${vendedorId}, produtoId = ${produtoId} WHERE id = ${id}`;

    let fields = Object.keys(req.body).map(key => `${key} = '${req.body[key]}'`)

    const query = `UPDATE produtos SET ${fields.join(', ')} WHERE id = ${id}`;

    con.query(query, (err, data) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(201).json(data).end();
        }
    })
}

const remove = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM vendas WHERE id = ${id}`;
    
    con.query(query, (err, data) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(201).json(data).end();
        }
    })
}

module.exports = {
    read,
    create,
    update,
    remove
}