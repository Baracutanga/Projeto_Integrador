const express = require('express');
const router = express.Router();
const coordenador = require('../controllers/coordenadorController');

router.get('/', coordenador.getAllController);
router.get('/', aluno.getCoordenadoresById);
router.post('/', coordenador.postController);
router.put('/:id', coordenador.updateController);
router.delete('/:id', coordenador.deleteController);

module.exports = router;