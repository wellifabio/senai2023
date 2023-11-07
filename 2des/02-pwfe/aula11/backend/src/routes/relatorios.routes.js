const express = require('express');

const router = express.Router();

const relatorios = require('../controller/relatorios.controller');

router.get('/comissao', relatorios.comissao);
router.get('/rvendas', relatorios.vendas);
router.get('/geralVendas', relatorios.geralVendas);

module.exports = router;