const user = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
      const Users = await user.find();
      res.json(Users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getAlunoById = async (req, res) => {
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
  
  exports.updateUser = async (req, res) => {
    try {
      const User = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!User) {
        return res.status(404).json({ message: 'Usuário não existente' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      await user.findByIdAndDelete(req.params.id);
      res.json({ message: 'Usuário Deletado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  