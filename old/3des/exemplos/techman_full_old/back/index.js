require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());
const rotas = require('./routes/routes.js');
app.use(rotas);
app.use('/', router);
app.listen(process.env.APP_PORT, ()=>{
    console.log('listening on localhost:'+process.env.APP_PORT);
})