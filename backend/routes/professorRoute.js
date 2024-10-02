const express = require('express');
const Professor = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.getAllController);
router.post('/', professorController.createController);
router.put('/:id', professorController.updateController);
router.delete('/:id', professorController.deleteController);

module.exports = router;