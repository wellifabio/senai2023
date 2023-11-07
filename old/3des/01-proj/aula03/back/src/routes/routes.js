const express = require('express');

const router = express.Router();

const Usuario = require('../controller/usuario');
const Publicacao = require('../controller/publicacao');

router.post('/usuario', Usuario.create);
router.post('/login', Usuario.login);
router.get('/usuarios', Usuario.read);
router.get('/usuario/:id', Usuario.readOne);

router.post('/publicacao', Publicacao.create);
router.get('/publicacoes', Publicacao.read);

module.exports = router;