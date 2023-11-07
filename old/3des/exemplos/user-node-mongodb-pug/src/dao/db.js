const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(error => console.log(error.message));