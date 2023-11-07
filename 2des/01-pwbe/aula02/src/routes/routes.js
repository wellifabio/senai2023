const express = require("express");

const router = express.Router();

const aluno = require("../controllers/aluno");
const professor = require("../controllers/professor")

router.get("/alunos", aluno.listar);
router.post("/aluno", aluno.criar);
router.put("/aluno", aluno.atualizar);
router.delete("/aluno", aluno.apagar);

router.get("/professores", professor.listar);
router.post("/professor", professor.criar);
router.put("/professor", professor.atualizar);
router.delete("/professor", professor.apagar);

module.exports = router;