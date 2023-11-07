require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')

const routes = require('./src/routes')

const app = express()
app.use(express.json())
    .use(cors())
    .use(routes)
app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))