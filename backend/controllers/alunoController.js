const aluno = require('../models/aluno');
const Turma = require("../models/turmaModel");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// requer nome do aluno email senha  e turma(id ou nome)

exports.getAllAlunos = async (req, res) => {
    try {
      const Alunos = await aluno.find();
      res.json(Alunos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getAlunosById = async (req, res) => {
    try {
      const aluno = await aluno.findById(req.params.id).populate('user');
      if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
      }
      res.json(aluno);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.createAluno = async (req, res) => {
    const { nome, email , senha , turma , nota } = req.body;
    const newAluno = new Aluno({ nome, email, senha , turma , nota });

    try {
      let turmaId;

      if(mongoose.Types.ObjectId.isValid(turma)) {
        turmaId = turma;
    
      } else{
        let turmaQuery = Turma.findOne({ nome: turma });
    
        if(!turmaQuery)res.status(404).json({status: "fail", message: "Turma não encontrada."});
    
        turmaId = turmaQuery._id;
      }
    
        const savedAluno = await newAluno.save();
        res.status(201).json(savedAluno);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

  exports.updateAluno = async (req, res) => {
    try {
      const Aluno = await aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!aluno) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteAluno = async (req, res) => {
    try {
      await aluno.findByIdAndDelete(req.params.id);
      res.json({ message: 'Aluno Deletado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  