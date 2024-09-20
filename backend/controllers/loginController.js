const login = require('../models/login');

exports.getLogins = async (req, res) => {
    try {
      const Logins = await login.find();
      res.json(Logins);
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
  
  exports.updatelogin = async (req, res) => {
    try {
      const login = await login.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!login) {
        return res.status(404).json({ message: 'Login não encontrado' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deletelogin = async (req, res) => {
    try {
      await login.findByIdAndDelete(req.params.id);
      res.json({ message: 'Login Deletado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  