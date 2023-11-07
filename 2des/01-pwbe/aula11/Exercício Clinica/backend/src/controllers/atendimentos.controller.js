const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = req.query;

    const query = `INSERT INTO atndimentos VALUES (DEFAULT, '${data.data}', ${data.medico_id}, '${data.paciente_id}')`;

    query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar atendimento"
            }).end();
        }else {
            data.id = result.insertId;
            
            req.status(200).json(data).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM atendimetos`;

    con.query(query, (err, result) => {
        if(err) {
            req.status(500).json({
                error: "Erro ao listar atendimentos"
            }).end();
        }else {
            res.status(200).json(resultado).end();
        }
    });
}

const alterar = (req, res) => {
    const { data } = req.query;

    const { id } = req.body;

    const query = `UPDATE atendimentos SET data = 'data' WHERE id = '${id}'`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(200).json({
                message: "Atendimento alterado com sucesso"
            }).end();
        }
    });
}

const remover = (req, res) => {
    const query = `DELETE FROM atendimentos`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(500).json({
                message: "Atendimento removido com sucesso"
            }).end();
        }
    });
}

module.exports = {
    cadastrar,
    alterar,
    remover
}