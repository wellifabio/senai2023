
const express = require('express');
const router = express.Router();

const Entregador = require("../controllers/entregador.controller");

router.post("/create",Entregador.create);
router.post("/login",Entregador.login);
router.get("/read/:id",Entregador.read);
router.get("/readAll",Entregador.readAll);
router.put("/update",Entregador.update);
router.delete("/del/:id",Entregador.del);

module.exports = router;