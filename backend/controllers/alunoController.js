const aluno = require('../models/aluno');

exports.getAlunos = async (req, res) => {
    try {
      const Alunos = await aluno.find();
      res.json(Alunos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.createAluno = async (req, res) => {
    const { nome, email , senha } = req.body;
    const newAluno = new Aluno({ nome, email, senha });

    try {
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
  