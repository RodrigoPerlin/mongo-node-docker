const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ClienteSchema = new Schema({
    nome: {type: String, max: 100},
    sobreNome: {type: String},
});
// Exportar o modelo
module.exports = mongoose.model('Cliente', ClienteSchema);