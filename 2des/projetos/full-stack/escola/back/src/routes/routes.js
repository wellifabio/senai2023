const express = require("express");
const router = express.Router();

const Alunos = require('../controllers/alunos');

router.get('/', Alunos.teste);
router.get('/aluno/listar', Alunos.listar);
router.get('/aluno/criar', Alunos.cadastrar);

module.exports = router