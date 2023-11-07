const express = require('express');
const app = express();

const vendedores = require('./src/routes/vendedores.routes');
const produtos = require('./src/routes/produtos.routes');
const vendas = require('./src/routes/vendas.routes');
const relatorios = require('./src/routes/relatorios.routes');

app.use(express.json());
app.use(vendedores);
app.use(produtos);
app.use(vendas);
app.use(relatorios);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});