const express = require("express");
const router = express.Router();

const Paciente = require('../controllers/paciente.controller');

router.get('/', Paciente.teste);
router.post('/criar', Paciente.criar);
router.get('/listar', Paciente.listar);
router.get('/listar/:id', Paciente.listar);
router.put('/alterar', Paciente.alterar);
router.delete('/excluir/:id', Paciente.excluir);

module.exports = router