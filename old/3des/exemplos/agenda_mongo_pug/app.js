const express = require('express');
const methodOverride = require('method-override');
const db = require('./src/dao/connect');
const compromisso = require('./src/routes/compromisso');

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use('/', compromisso);
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));