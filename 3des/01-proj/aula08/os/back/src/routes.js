const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { return res.json("API OS respondendo") });


const Colaborador = require('./controllers/colaborador');

router.get('/colaboradores', Colaborador.read);
router.get('/colaboradores/:matricula', Colaborador.read);
router.get('/cargos', Colaborador.readCargo);
router.get('/setores', Colaborador.readSetor);
router.post('/colaboradores', Colaborador.create);
router.put('/colaboradores', Colaborador.update);
router.delete('/colaboradores/:matricula', Colaborador.del);
router.post('/colaboradores/login', Colaborador.login);

const Os = require('./controllers/os');

router.get('/oss', Os.read);
router.get('/oss/open', Os.readOpen);
router.get('/oss/closed', Os.readClosed);
router.get('/oss/:id', Os.read);
router.post('/oss', Os.create);
router.put('/oss', Os.update);
router.delete('/oss/:id', Os.del);

const Comentario = require('./controllers/comentario');

router.get('/comentarios', Comentario.read);
router.get('/comentarios/:id', Comentario.read);
router.post('/comentarios', Comentario.create);
router.put('/comentarios', Comentario.update);
router.delete('/comentarios/:id', Comentario.del);

module.exports = router;