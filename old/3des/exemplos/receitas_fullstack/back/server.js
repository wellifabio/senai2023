require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

//Configurar politica CORS
let corsOptions = {
    origin: [
        'http://127.0.0.1:5500',
        'http://localhost:5500',
    ],
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
};


//Importar dao e rotas
const dao = require('./src/dao/receita.dao');
dao.conecta();
const receita = require('./src/routes/receita.route');

//Iniciar a API
const app = express()
    .use(cors(corsOptions))
    .use(express.json({ limit: '50mb' }))
    .use(express.urlencoded({ limit: '50mb', extended: true }))
    .use('/', receita);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});