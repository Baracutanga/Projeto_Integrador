const express = require('express');
const router = express.Router();
const professor = require('../controllers/professorController');

router.get('/', professor.getAllController);
router.get('/', aluno.getProfessoresById);
router.post('/', professor.postController);
router.put('/:id', professor.updateController);
router.delete('/:id', professor.deleteController);

module.exports = router;