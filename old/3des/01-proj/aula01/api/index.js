require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const entregadores = require('./src/routes/entregadores.route');
const pedidos = require('./src/routes/pedidos.route');
const teste = require('./src/routes/teste.route');

const app = express()
    .use(express.json())
    .use(cors())
    .use("/", teste)
    .use('/entregadores/', entregadores)
    .use('/pedidos/', pedidos);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});