const express = require('express');
const router = express.Router();

const Pedido = require("../controllers/pedido.controller");

const teste = (req, res) => {
    res.json("Online").end();
}

router.get("/",teste);

module.exports = router;