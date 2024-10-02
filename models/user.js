const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  user: {type:String, enum:['Professor', 'Aluno', 'Coordenador']},
  email:{ type: String, required: true },
  nome: { type: String, required: true },
  senha: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

UserSchema.pre('save', async function(next) {
  if (this.isModified('senha')) {
    this.senha = await bcrypt.hash(this.senha, 10);
  }

// Setando isAdmin basedo no 'user'
if (this.user === 'Coordenador') {
  this.isAdmin = true;
} else {
  this.isAdmin = false;
}
next();
});

UserSchema.methods.compareSenha = function(senha) {
  return bcrypt.compare(senha, this.senha);
};

module.exports = mongoose.model('User', UserSchema);