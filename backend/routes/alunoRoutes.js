const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const aluno = require('../controllers/alunoController');

router.get('/', aluno.getAllAlunos);
router.get('/:id', aluno.getAlunosById);
router.post('/create', aluno.createAluno);
router.put('/:id', aluno.updateAluno);
router.delete('/:id', aluno.deleteAluno);

module.exports = router;