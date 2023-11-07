require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')
const methodOverride = require('method-override')

const router = require('./src/routes/tarefa')

const app = express()
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/', router)
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log("Respondendo na porta:" + PORT)
})