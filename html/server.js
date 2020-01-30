const express = require ('express'); //importando la librería de express

const app = express(); // objeto app con el que definimos rutas

app.use('/assets', express.static('assets'));// el metodo use del objeto app inserta un nuevo middleware

app.get('/', function (req, resp) {
    resp.sendFile('index.html',
        {
            root: __dirname
        });

});

app.listen(3000);// ponerlo en el puerto 3000