const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    email: {type:Mixed, required:true},
    nome: { type: String, required: true, unique: true },
    senha: { type: Mixed, required: true },
  });

  module.exports = mongoose.model('cadastro', cadastroSchema);