const express = require('express');
const router = express.Router();
const usuario = require('../controllers/usuario.js');
const equipamento = require('../controllers/equipamento.js');
const comentario = require('../controllers/comentario.js');

router.get('/usuarios/:id',  usuario.doGet);
router.get('/usuarios',  usuario.doGetAll);
router.post('/usuarios', usuario.doPostlogin);
router.get('/equipamentos/:id',  equipamento.doGet);
router.get('/equipamentos',  equipamento.doGetAll);
router.post('/equipamentos',  equipamento.doPost);
router.delete('/equipamentos/:id',  equipamento.doDelete);
router.get('/comentarios/:id',  comentario.doGet);
router.get('/comentarios',  comentario.doGetAll);
router.post('/comentarios',  comentario.doPost);
router.delete('/comentarios/:id',  comentario.doDelete);

module.exports = router;