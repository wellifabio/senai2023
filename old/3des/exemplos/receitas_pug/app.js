require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const methodOverride = require('method-override')

const db = require('./src/dao/db')
const receita = require('./src/routes/receita')

const app = express()
app.set('view engine', 'pug')
    .use(express.static('public'))
    .use(methodOverride('_method'))
    .use(express.urlencoded({ extended: true, limit: '1mb' }))
    .use('/', receita)
app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))