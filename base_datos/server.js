//***LIBRERIAS
const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const methodOverride = require('method-override');
const session = require('express-session');
const socketio = require('socket.io');

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

let server = app.listen(3000);

let io = socketio(server); // comunicación de mensajes y eventos

let usersCount = 0; //contador de usuarios conectados en tiempo real

io.on('connection', function(socket){
    usersCount++;

    io.emit('users_count_updated', {count: usersCount}); // el primer argumento del mensaje es un identificador del mensaje, el segundo argumento son los datos

    socket.on('disconnect', function(){
        usersCount--;
    });
});

