const express = require('express')
const router = express.Router()

const colaborador = require('../controllers/colaborador')
const os = require('../controllers/os')
const comentario = require('../controllers/comentario')

router.get('/', colaborador.iniciar)
router.get('/login', colaborador.recarrega)
router.post('/login', colaborador.login)

router.post('/os/create', os.criar)
router.put('/os/update', os.alterar)
router.put('/os/update/:id', os.concluir)
router.delete('/os/del/:id', os.excluir)

router.post('/comentario/create', comentario.criar)

module.exports = router