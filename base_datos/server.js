const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

let db = new sqlite3.Database('proyecto-backend');

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');//correr una consulta SQL

app.post('/pendientes', function(req, resp){
    db.run(`INSERT INTO tasks (description) VALUES ('${req.body.description}')`);
    resp.send('Inserción finalizada');
});



app.listen(3000);

process.on('SIGINT', function(){//este objeto nos permite escuchar eventos del proceso
    console.log('Adiós - Atte. El Servidor');
    db.close();//cerrar la conexion
    process.exit();//termina el servidor de node
});