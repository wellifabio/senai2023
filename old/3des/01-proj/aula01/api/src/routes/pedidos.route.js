
const express = require('express');
const router = express.Router();

const Pedido = require("../controllers/pedido.controller");

router.post("/create",Pedido.create);
router.get("/read/:id",Pedido.read);
router.get("/readAll",Pedido.readAll);
router.get("/readAtivos",Pedido.readAtivos);
router.get("/readCozinha",Pedido.readCozinha);
router.get("/readEntrega",Pedido.readEntrega);
router.get("/readEntrega/:id",Pedido.readEntregaPorEntregador);
router.put("/update",Pedido.update);
router.put("/toEntrega/:id",Pedido.toEntrega);
router.put("/toEnd/:id",Pedido.toEnd);
router.delete("/del/:id",Pedido.del);

module.exports = router;