const express = require('express');
const router = express.Router();

const compromisso = require('../controllers/compromisso');

router.get('/', compromisso.read);
router.post('/create', compromisso.create);
router.put('/update/:id', compromisso.update);
router.delete('/delete/:id', compromisso.del);

module.exports = router;