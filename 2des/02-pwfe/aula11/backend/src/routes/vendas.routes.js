const express = require('express');

const router = express.Router();

const vendas = require('../controller/vendas.controller');

router.get('/vendas', vendas.read);
router.post('/venda', vendas.create);
router.put('/vendas/:id', vendas.update);
router.delete('/vendas/:id', vendas.remove);

module.exports = router;