const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController');

router.get('/', professorController.getProfessores);
router.get('/', professorController.getProfessoresById);
router.post('/professores', professorController.createProfessor);
router.put('/professores/:id', professorController.updateProfessor);
router.delete('/:id', professorController.deleteProfessor);

module.exports = router;