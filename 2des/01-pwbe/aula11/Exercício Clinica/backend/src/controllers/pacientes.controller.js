const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let data = res.body;

    const query = `INSERT INTO paciente VALUES (DEFAULT, ${data.nome}', '${data.nascimento}')`;

    con.query(queri, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar paciente"
            }).end();
        }else {
            data.id = result.insertId;
            
            res.status(200).json(info).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM paciente`;

    con.query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar pacientes"
            }).end();
        }else {
            req.status(200).json(result).end();
        }
    });
}
