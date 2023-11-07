const mongoose = require('mongoose');

const compromissoSchema = new mongoose.Schema({
    quando: { type: Date, required: true },
    onde: { type: String, required: true },
    descricao: { type: String, required: true }
})

module.exports = mongoose.model('Compromisso', compromissoSchema);