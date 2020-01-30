const express = require ('express'); //importando la librería de express

const app = express(); // objeto app con el que definimos rutas

app.set('view engine', 'ejs');// hay que hacerlo para que sepa que es un motor de vistas lo que vamos a enviar y cuál es

app.use('/assets', express.static('assets'));

app.get('/', function (req, resp) {
    resp.render('index')//método para enviar una vista después que se configura el motor de vistas
});

app.listen(3000);// ponerlo en el puerto 3000