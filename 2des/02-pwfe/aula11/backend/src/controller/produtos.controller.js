const con = require('../connection');

const read = (req, res) => {
    con.query('SELECT * FROM produtos', (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(200).json(rows).end();
        }
    });
}

const create = (req, res) => {
    const { nome, valor } = req.body;

    const query = `INSERT INTO produtos VALUES (DEFAULT, '${nome}', '${valor}')`;

    con.query(query, (err, data) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(201).json({
                id: data.insertId,
                nome,
                valor
            }).end();
        }
    })
}

const update = (req, res) => {
    const { id } = req.params;
    // const { nome, valor } = req.body;
    // const query = `UPDATE produtos SET nome = '${nome}', valor = '${valor}' WHERE id = ${id}`;

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

    const query = `DELETE FROM produtos WHERE id = ${id}`;
    
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