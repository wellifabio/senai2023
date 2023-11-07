const express = require('express');
const router = express.Router();

const Alocacao = require('./controllers/alocacao');
const Automoveis = require('./controllers/automoveis');
const Clientes = require('./controllers/clientes');
const Concessionarias = require('./controllers/concessionarias');
const Vendas = require('./controllers/vendas');

router.get('/', (req, res) => { res.json('API em execução') });
router.get('/alocacao', Alocacao.readAll);
router.get('/alocacao/area', Alocacao.readArea);
router.get('/automoveis', Automoveis.read);
router.get('/automoveis/:area', Automoveis.readArea);
router.get('/clientes', Clientes.read);
router.get('/concessionarias', Concessionarias.read);
router.get('/concessionarias/:automovelId', Concessionarias.read);
router.get('/vendas', Vendas.read);
router.post('/vendas', Vendas.create);

module.exports = router;