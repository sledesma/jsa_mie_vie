const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/productos', function(req, res){
    res.send([
        { id: 1, nombre: 'Celular' },
        { id: 2, nombre: 'Teclado' }
    ]);
});

app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));