const express = require('express');

const router = express.Router();

const Entregador = require('../controller/entregador');
const Pedido = require('../controller/Pedido');

router.get('/', Entregador.test);
router.post('/entregadores/create', Entregador.create);
router.get('/entregadores/read', Entregador.readAll);
router.get('/entregadores/read/:id', Entregador.read);
router.post('/entregadores/login', Entregador.login);
router.put('/entregadores/update/:id', Entregador.update);
router.delete('/entregadores/delete/:id', Entregador.del);

router.post('/pedidos/create', Pedido.create);
router.get('/pedidos/read', Pedido.readAll);
router.get('/pedidos/read/:id', Pedido.read);
router.put('/pedidos/toentrega/:id', Pedido.toEntrega);
router.put('/pedidos/toend/:id', Pedido.toEnd);

module.exports = router;