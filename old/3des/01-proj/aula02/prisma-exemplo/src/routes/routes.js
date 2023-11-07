const express = require('express');

const router = express.Router();

const Funcionarios = require('../controller/funcionarios');

router.get('/funcionarios', Funcionarios.read);
router.get('/funcionarios/:id', Funcionarios.readFunc);
router.post('/funcionarios', Funcionarios.create);
router.put('/funcionarios/:id', Funcionarios.update);
router.delete('/funcionarios/:id', Funcionarios.remove);

module.exports = router;