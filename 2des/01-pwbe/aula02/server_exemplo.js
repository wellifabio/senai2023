const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    let i = 2;
    if(i == 0) {
        res.status(200).send("Funcionando").end();
    }else{
        res.status(404).end();
    }
})

app.get("/listar", (req, res) => {
    // let nome = req.query.nome;
    // let matricula = req.query.matricula;

    let { nome, matricula } = req.query;

    console.log(nome, matricula);

    res.status(200).send("LISTANDO").end();
});

app.get("/info/:marca/:modelo", (req, res) => {
    let { marca, modelo } = req.params;

    console.log(marca, modelo);

    res.status(200).end();
});

app.post("/criar", (req, res) => {
    let {id, nome, matricula} = req.body;

    console.log(id, nome, matricula);

    res.status(200).end();
})

app.listen(3000, () => {
    console.log("Rodando na 3000");
});