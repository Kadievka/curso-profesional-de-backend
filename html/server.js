const express = require ('express'); //importando la librería de express

const app = express(); // objeto app con el que definimos rutas

app.get('/', function (req, resp) { //la ruta get que recibe como parametros la ruta y la funcion manejadora, que recibe a su vez
    //la petición y la respuesta
    //resp.send(__dirname); //__dirname es una variable que devuelve la ruta absoluta del proyecto
    resp.sendFile('index.html',
        {
            root: __dirname
        });// método sendFile (path, options, callback) que tiene el objeto resp

});

app.listen(3000);// ponerlo en el puerto 3000