require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const Routes = require('./src/routes');

const app = express();
app.use(cors())
    .use(express.json())
    .use(Routes)
    .listen(PORT, () => { console.log("API respondendo na porta " + PORT) });