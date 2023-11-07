const express = require('express');
const router = express.Router();

const receitaController = require('../controllers/receita.controller');

router.get('/', receitaController.teste);
router.get('/read/', receitaController.readAll);
router.get('/read/:id', receitaController.read);
router.post('/create', receitaController.create);
router.put('/update/:id', receitaController.update);
router.delete('/del/:id', receitaController.del);
router.post('/login', receitaController.login);

module.exports = router;