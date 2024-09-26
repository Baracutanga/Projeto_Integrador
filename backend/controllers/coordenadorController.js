const coordenador = require('../models/coordenador');

exports.getCoordenadores = async (req, res) => {
    try {
      const Professores = await coordenador.find();
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
  
  exports.updateCoordenador = async (req, res) => {
    try {
      const Professor = await coordenador.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!coordenador) {
        return res.status(404).json({ message: 'Coordenador não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteCoordenador = async (req, res) => {
    try {
      await coordenador.findByIdAndDelete(req.params.id);
      res.json({ message: 'Coordenador Deletado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  