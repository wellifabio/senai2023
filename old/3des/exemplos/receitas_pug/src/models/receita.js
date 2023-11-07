const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ReceitaSchema = new Schema({
    nome: { type: String, required: true, max: 100 },
    tipo: { type: String, required: true, max: 20 },
    ingredientes: { type: String, required: true, max: 500 },
    modoPreparo: { type: String, required: true, max: 500 },
    foto: { type: String, required: false, max: 20240 }
})

module.exports = mongoose.model('Receita', ReceitaSchema)