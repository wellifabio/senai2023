require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')

const router = require('./src/routes/item')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('www'))
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(PORT, () => {
    console.log("Respondendo na porta:" + PORT)
})