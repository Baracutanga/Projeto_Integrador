const Professor = require('../models/professor');

exports.getProfessores = async (req, res) => {
    try {
      const Professores = await professor.find();
      res.json(Professores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getloginById = async (req, res) => {
    try {
      const user = await login.findById(req.params.id);
      if (!login) {
        return res.status(404).json({ message: 'Login não encontrado' });
      }
      res.json(login);
    } catch (error) {
      res.status(500).json({ error: error.message });
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
  