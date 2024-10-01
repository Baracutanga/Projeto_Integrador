const mongoose = require('mongoose');

const CoordenadorSchema = new mongoose.Schema({
    email: {type:Mixed, required:true },
    nome: { type: String, required: true },
    senha: { type: Mixed, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isAdmin: { type: Boolean, default: false },
  });

  module.exports = mongoose.model('Coordenador', CoordenadorSchema);