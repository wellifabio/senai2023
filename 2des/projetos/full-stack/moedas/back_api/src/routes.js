const express = require("express");
const router = express.Router();

const Moeda = require('./controllers/moeda');

router.get('/', Moeda.teste);
router.post('/criar', Moeda.criar);
router.get('/listar', Moeda.listar);
router.get('/listar/:id', Moeda.listar);
router.put('/alterar', Moeda.alterar);
router.delete('/excluir/:id', Moeda.excluir);

module.exports = router