require('dotenv').config();
const MONGODB_URI = process.env.MONGO_URL || 'mongodb://localhost/receitas'
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado MongoDB/receitas'))
    .catch(error => console.log(error.message));