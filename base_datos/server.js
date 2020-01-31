const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const tasks = require('./controllers/tasks.js');// importo el controlador de tasks

const app = express();

const tasksRoutes = require('./routes/tasks_routes'); //importar las rutas

app.use(bodyParser.urlencoded({extended: true}));

app.use(tasksRoutes);

//Sequelize se va a conectar por su cuenta//

app.set('view-engine', 'pug');

app.listen(3000);