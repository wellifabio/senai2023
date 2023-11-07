const express = require('express');

const router = express.Router();

const produto = require('../controllers/produto-controller');

router.post('/produto', produto.create);
router.get('/produtos', produto.read);
router.put('/produto/:id', produto.update);
router.delete('/produto/:id', produto.remove);

module.exports = router;