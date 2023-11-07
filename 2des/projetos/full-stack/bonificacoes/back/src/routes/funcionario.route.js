const express = require("express");
const router = express.Router();

const Funcionario = require('../controllers/funcionario.controller');

router.get('/', Funcionario.teste);
router.post('/criar', Funcionario.criar);
router.get('/listar', Funcionario.listar);
router.get('/listar/:matricula', Funcionario.listar);
router.put('/alterar', Funcionario.alterar);
router.delete('/excluir/:matricula', Funcionario.excluir);

module.exports = router