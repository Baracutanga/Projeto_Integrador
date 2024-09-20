const login = require('../models/cadastro');

exports.getCadastros = async (req, res) => {
    try {
      const Cadastros = await cadastro.find();
      res.json(Cadastros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getcadastroById = async (req, res) => {
    try {
      const cadastro = await cadastro.findById(req.params.id);
      if (!cadastro) {
        return res.status(404).json({ message: 'Cadastro não foi realizado' });
      }
      res.json(cadastro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updatecadastro = async (req, res) => {
    try {
      const cadastro = await cadastro.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!cadastro) {
        return res.status(404).json({ message: 'Conta não encontrada' });
      }
      res.json(cadastro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deletecadastro = async (req, res) => {
    try {
      await cadastro.findByIdAndDelete(req.params.id);
      res.json({ message: 'Conta Deletada' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  