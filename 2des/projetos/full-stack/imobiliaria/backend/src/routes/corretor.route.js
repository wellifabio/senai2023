const express = require("express");

const router = express.Router();

const Corretor = require("../controllers/corretor.controller");

router.post("/corretor", Corretor.adicionar);
router.get("/corretores", Corretor.listar);
router.post("/login", Corretor.autenticar);

module.exports = router;