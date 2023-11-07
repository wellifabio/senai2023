const express = require("express");
const router = express.Router();

const Task = require('../controllers/tarefa');

router.get('/', Task.listar);
router.post('/create', Task.cadastrar);
router.put('/update', Task.alterar);
router.delete('/del/:id', Task.excluir);

module.exports = router