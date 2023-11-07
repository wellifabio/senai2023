const express = require('express');
const methodOverride = require('method-override');
const db = require('./src/dao/db');
const usersRoutes = require('./src/routes/users');

const app = express();
app.set('view engine', 'pug');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use('/users', usersRoutes);
app.use('/', (req, res) => {
    res.redirect('/users')
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));