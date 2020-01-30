const express = require ('express');
const cookieSession = require ('cookie-session');// puede encriptar y desencriptar cookies

const app = express();

app.use(cookieSession({//atributos de configuración
    name: 'session', //es una vlor por defecto
    keys: ['Kadievka','Salcedo','25','kadievka@gmail.com']//arreglo de datos para verificación
}));

app.get('/', function(req, resp){
    req.session.visits = req.session.visits || 0;
    req.session.visits = req.session.visits + 1;

    resp.send(`${req.session.visits} visitas`);
});

app.listen(3000);
