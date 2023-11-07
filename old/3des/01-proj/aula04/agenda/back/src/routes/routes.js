const express = require('express');
const router = express.Router();

const compromisso = require('../controllers/compromisso');

router.get('/', compromisso.teste);
router.post('/create', compromisso.create);
router.get('/read', compromisso.readAll);
router.get('/read/:id', compromisso.readId);
router.put('/update/:id', compromisso.update);
router.delete('/delete/:id', compromisso.del);

module.exports = router;