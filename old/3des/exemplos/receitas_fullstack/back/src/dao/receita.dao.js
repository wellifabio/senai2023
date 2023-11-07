require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const conecta = () => {
    let mongoDB = process.env.MONGODB_URI;
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    mongoose.Promise = global.Promise;
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
}

module.exports = {
    conecta
};
