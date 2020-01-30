const http = require ('http');

function responderPeticion(request, response) {
  response.end('Hola mundo');
}

let app = http.createServer(responderPeticion);

app.listen(3000,function() {
    console.log('Servidor iniciado');
});
