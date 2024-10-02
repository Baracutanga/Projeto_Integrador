const express = require('express');
const Coordenador = express.Router();
const coordenadorController = require('../controllers/coordenadorController');

router.get('/', coordenador.getAllController);
router.post('/', coordenador.createController);
router.put('/:id', coordenador.updateController);
router.delete('/:id', coordenador.deleteController);

module.exports = router;