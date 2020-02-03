const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');

const tasks = require('./controllers/tasks.js');

const app = express();

const tasksRoutes = require('./routes/tasks_routes'); 
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');// importar esta ruta nueva

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes); // importar esta ruta nueva

app.set('view-engine', 'pug');

app.listen(3000);