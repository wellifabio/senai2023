const express = require("express");

const Imoveis = require("../controllers/imovel.controller");

const router = express.Router();

router.get("/imoveis", Imoveis.listar);
router.get("/imoveis/:info", Imoveis.buscar);
router.get("/imoveis/corretor/:id", Imoveis.imoveisPorCorretor);
router.post("/imovel", Imoveis.adicionar);
router.put("/imovel/:codigo/:status", Imoveis.alterarStatus);

module.exports = router;