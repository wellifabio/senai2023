const express = require('express');
const cors = require('cors');

const app = express();

const produtoRoutes = require('./src/routes/produto-routes');
const setorRoutes = require('./src/routes/setor-routes');
const vendaRoutes = require('./src/routes/venda-routes');
const vendedorRoutes = require('./src/routes/vendedor-routes');

app.use(cors());
app.use(express.json());

app.use(produtoRoutes);
app.use(setorRoutes);
app.use(vendaRoutes);
app.use(vendedorRoutes);

app.listen(3000, () => { console.log("Running") })