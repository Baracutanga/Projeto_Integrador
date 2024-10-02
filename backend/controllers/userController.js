const user = require('../models/user');

exports.getUsers = async (req, res) => {
    try {
      const Users = await user.find();
      res.json(Users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.getUsersById = async (req, res) => {
    try {
      const user = await user.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.createUser = async (req, res) => {
    const { nome, email , senha } = req.body;
    const newUser = new User({ nome, email, senha });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
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
  