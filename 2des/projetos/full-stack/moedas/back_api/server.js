const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const routes = require('./src/routes');

// Inicia o servidor
app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});