const express = require('express');

const Atendimentos = require('./controllers/atendimentos.controller');

const router = express.Router();

router.post('/atendimento', Atendimentos.cadastrar);
router.get('/atendimentos', Atendimentos.listar);
router.put('/atendimento/:id', Atendimentos.alterar);
router.delete('/atendimento/:id', Atendimentos.remover);

module.exports = router;