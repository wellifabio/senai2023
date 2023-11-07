require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const con = require('./config/connection');
con.getConnectionInfo();

const routes = require('./src/routes/routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});