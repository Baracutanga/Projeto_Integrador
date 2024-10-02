const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
    email: {type:String, required:true, unique:true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

  module.exports = mongoose.model('Professor', ProfessorSchema);