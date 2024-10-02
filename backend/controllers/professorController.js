const professor = require('../models/professor');

exports.getProfessores = async (req, res) => {
    try {
      const Professores = await professor.find();
      res.json(Professores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getProfessoresById = async (req, res) => {
    try {
      const professor = await professor.findById(req.params.id).populate('user');
      if (!professor) {
        return res.status(404).json({ message: 'Professor não encontrado' });
      }
      res.json(professor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.createProfessor = async (req, res) => {
    const { nome, email , senha } = req.body;
    const newProfessor = new Professor({ nome, email, senha });

    try {
        const savedProfessor = await newProfessor.save();
        res.status(201).json(savedProfessor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
  
  
  exports.updateProfessor = async (req, res) => {
    try {
      const Professor = await professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!professor) {
        return res.status(404).json({ message: 'Professor não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteProfessor = async (req, res) => {
    try {
      await professor.findByIdAndDelete(req.params.id);
      res.json({ message: 'Professor Deletado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  