const express = require('express');

const Pacientes = require('../../controller/pacientes.controller');

const router = express.Router();

router.post('/paciente', Pacientes.cadastrar);
router.get('/pacientes', Pacientes.lista);
