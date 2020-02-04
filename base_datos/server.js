//***LIBRERIAS
const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');

const tasks = require('./controllers/tasks.js');

const app = express();

//***RUTAS
const tasksRoutes = require('./routes/tasks_routes'); 
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');
const categoriesRoutes = require('./routes/categories_routes');// importar esta ruta nueva

//***MIDDLEWARES
const findUserMiddleware = require('./middlewares/find_user');
const authUser = require('./middlewares/auth_user');

app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use(session({
    secret: ['12342qreagfhagaef', '89654685ygdvadsggfergdfs'],
    saveUninitialized: false,
    resave: false
}));

app.use(findUserMiddleware);
app.use(authUser);

app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.use(categoriesRoutes);



app.get('/', function(req, res){
    res.render('home.pug', {user: req.user});
});

app.set('view-engine', 'pug');

app.listen(3000);