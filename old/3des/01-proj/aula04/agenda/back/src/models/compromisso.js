const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compromissoSchema = new Schema({
    quando: { type: Date, required: true },
    onde: { type: String, required: true },
    descricao: { type: String, required: true }
})

module.exports = mongoose.model('Compromisso', compromissoSchema);