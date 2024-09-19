const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {type:Mixed, required:true},
    nome: { type: String, required: true, unique: true },
    senha: { type: Mixed, required: true },
  });
  
  UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  loginSchema.methods.compareSenha = function(senha) {
    return bcrypt.compare(senha, this.senha);
  };
  
  module.exports = mongoose.model('login', loginSchema);