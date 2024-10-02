const mongoose = require('mongoose');


const disciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});
//Exportando o modelo de disciplina
module.exports = mongoose.model('Disciplina', disciplinaSchema);