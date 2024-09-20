const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    email: {type:Mixed, required:true},
    nome: { type: String, required: true, unique: true },
    senha: { type: Mixed, required: true },
  });
  
  UserSchema.pre('save', async function(next) {
    if (this.isModified('senha')) {
      this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
  });
  
  cadastroSchema.methods.compareSenha = function(senha) {
    return bcrypt.compare(senha, this.senha);
  };
  
  module.exports = mongoose.model('cadastro', cadastroSchema);