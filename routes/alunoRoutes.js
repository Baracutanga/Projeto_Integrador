const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const aluno = require('../controllers/alunoController');

router.get('/', aluno.getAllAlunos);
router.get('/', aluno.getAlunosById);
router.post('/', aluno.createAluno);
router.put('/:id', aluno.updateAluno);
router.delete('/:id', aluno.deleteAluno);



module.exports = router;