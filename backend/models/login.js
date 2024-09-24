const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    selectbox: { required:true},
    email: { type:Mixed, required:true},
    senha: { type: Mixed, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

  module.exports = mongoose.model('login', loginSchema);
 