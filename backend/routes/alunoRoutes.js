const express = require('express');
const router = express.Router();
const aluno = require('../controllers/alunoController');

router.get('/', aluno.getAllController);
router.get('/', aluno.getAlunosById);
router.post('/', aluno.postController);
router.put('/:id', aluno.updateController);
router.delete('/:id', aluno.deleteController);

module.exports = router;