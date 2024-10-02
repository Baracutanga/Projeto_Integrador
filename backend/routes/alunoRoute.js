const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.getAllController);
router.post('/', alunoController.createController);
router.put('/:id', alunoController.updateController);
router.delete('/:id', alunoController.deleteController);

module.exports = router;