const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const tasks = require('./controllers/tasks.js');// importo el controlador de tasks

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Sequelize se va a conectar por su cuenta//

app.set('view-engine', 'pug');

//AQUI VAN MIS RUTAS
app.get('/tasks', tasks.home); // le damos el controlador que importamos.nombre de la funcion que nos retorna los datos
//FINALIZAN MIS RUTAS

app.post('/pendientes', function(req, resp){
    //db.run(`INSERT INTO tasks (description) VALUES (?)`, req.body.description);
    resp.send('Inserción finalizada');
});

app.listen(3000);