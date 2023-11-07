const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});