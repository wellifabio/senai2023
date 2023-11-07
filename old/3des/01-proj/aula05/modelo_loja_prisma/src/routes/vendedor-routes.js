const express = require('express');

const router = express.Router();

const vendedor = require('../controllers/vendedor-controller');

router.post('/vendedor', vendedor.create);
router.get('/vendedores', vendedor.read);
router.put('/vendedor/:id', vendedor.update);
router.delete('/vendedor/:id', vendedor.remove);

module.exports = router;