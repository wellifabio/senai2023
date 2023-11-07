const express = require('express');

const router = express.Router();

const vendedores = require('../controller/vendedores.controller');

router.get('/vendedores', vendedores.read);
router.post('/vendedor', vendedores.create);
router.put('/vendedor/:id', vendedores.update);
router.delete('/vendedor/:id', vendedores.remove);

module.exports = router;