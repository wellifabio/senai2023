const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = req.body;

    const query = `INSERT INTO medico VALUES (DEFAULT, ${data.nome}', ${data.especilidade_id})`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar medico"
            }).end();
        }else {
            data.id = result.insertId;
            
            result.status(200).json(data).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT m.id, n.nome, e.nome as especialidade FROM medicos m
                    INNER JOY especialidades e
                    ON e.id = m.especialidade_id`;

    con.query(query, (err, result) => {
        if(error) {
            res.status(500).json({
                error: "Erro ao listar medicos"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar
}