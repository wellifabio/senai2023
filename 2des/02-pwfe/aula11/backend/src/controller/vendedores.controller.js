const con = require('../connection');

const read = (req, res) => {
    con.query('SELECT * FROM vendedores', (err, rows) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(200).json(rows).end();
        }
    });
}

const create = (req, res) => {
    const { nome, matricula } = req.body;

    const query = `INSERT INTO vendedores VALUES (DEFAULT, '${nome}', '${matricula}')`;

    con.query(query, (err, data) => {
        if (err) {
            res.status(500).json(err).end();
        } else {
            res.status(201).json({
                id: data.insertId,
                nome,
                matricula
            }).end();
        }
    })
}

const update = (req, res) => {
    const { id } = req.params;
    // const { nome, matricula } = req.body;
    // const query = `UPDATE vendedores SET nome = '${nome}', matricula = '${matricula}' WHERE id = ${id}`;

    let fields = Object.keys(req.body).map(key => `${key} = '${req.body[key]}'`)

    const query = `UPDATE vendedores SET ${fields.join(', ')} WHERE id = ${id}`;

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

    const query = `DELETE FROM vendedores WHERE id = ${id}`;
    
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