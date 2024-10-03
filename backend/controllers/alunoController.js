const Aluno = require('../models/alunoModel'); // Corrigido para Aluno
const Turma = require("../models/turmaModel");
const mongoose = require('mongoose'); // Certifique-se de importar mongoose se não tiver feito isso

// Requer nome do aluno, email, senha e turma (id ou nome)

exports.getAllAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find(); // Alterado para "alunos" para evitar confusão
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAlunosById = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id).populate('user'); // Mudado para Aluno
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAluno = async (req, res) => {
  const { nome, email, senha, turma } = req.body;
  const newAluno = new Aluno({ nome, email, senha, turma }); // Corrigido para Aluno

  try {
    let turmaId;

    if (mongoose.Types.ObjectId.isValid(turma)) {
      turmaId = turma;
    } else {
      const turmaQuery = await Turma.findOne({ nome: turma }); // Adicionei await para garantir que a busca seja concluída

      if (!turmaQuery) return res.status(404).json({ status: "fail", message: "Turma não encontrada." });

      turmaId = turmaQuery._id;
    }

    // Aqui, atribuí o id da turma ao novo aluno
    newAluno.turma = turmaId; 

    const savedAluno = await newAluno.save();
    res.status(201).json(savedAluno);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Mudado para Aluno
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.json(aluno); // Corrigido para retornar "aluno" e não "user"
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAluno = async (req, res) => {
  try {
    await Aluno.findByIdAndDelete(req.params.id); // Mudado para Aluno
    res.json({ message: 'Aluno Deletado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
