const express = require('express');

const router = express.Router();

const setor = require('../controllers/setor-controller');

router.post('/setor', setor.create);
router.get('/setores', setor.read);
router.put('/setor/:id', setor.update);
router.delete('/setor/:id', setor.remove);

module.exports = router;