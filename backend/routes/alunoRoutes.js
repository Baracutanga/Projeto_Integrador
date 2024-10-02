const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const aluno = require('../controllers/alunoController');

router.get('/', aluno.getAllAlunos);
router.get('/', aluno.getAlunosById);
router.post('/', aluno.createAluno);
router.put('/:id', aluno.updateAluno);
router.delete('/:id', aluno.deleteAluno);
//adicionar/atualizar recuperação, médias finais ou resumo de notas
router.put("/notas/conceitos", alunoController.addOrUpdateRecuperacaoMedia); // PUT /api/alunos/notas/recuperacao

module.exports = router;