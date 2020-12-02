const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.json({
        mensaje: 'Hola mundo'
    });
});

app.get('/mensaje', function(req, res){
    res.send('Hola mundo');
});

app.post('/', function(req, res) {
    res.status(500).send('Error papa');
});

app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'))