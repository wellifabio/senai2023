const express = require('express');

const router = express.Router();

const vendedores = require('../controller/produtos.controller');

router.get('/produtos', vendedores.read);
router.post('/produto', vendedores.create);
router.put('/produtos/:id', vendedores.update);
router.delete('/produtos/:id', vendedores.remove);

module.exports = router;