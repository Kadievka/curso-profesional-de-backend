const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const sequelize = new Sequelize('proyecto-backend', null, null,{
    dialect: 'sqlite',
    storage: 'proyecto-backend'
});

let db = new sqlite3.Database('proyecto-backend');

app.post('/pendientes', function(req, resp){
    //db.run(`INSERT INTO tasks (description) VALUES (?)`, req.body.description);
    resp.send('Inserción finalizada');
});



app.listen(3000);

process.on('SIGINT', function(){//este objeto nos permite escuchar eventos del proceso
    console.log('Adiós - Atte. El Servidor');
    db.close();//cerrar la conexion
    process.exit();//termina el servidor de node
});