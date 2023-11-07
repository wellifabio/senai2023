const express = require('express');

const router = express.Router();

const venda = require('../controllers/venda-controller');

router.post('/venda', venda.create);
router.get('/vendas', venda.read);
router.put('/venda/:id', venda.update);
router.delete('/venda/:id', venda.remove);

module.exports = router;