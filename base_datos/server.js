const express= require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Sequelize se va a conectar por su cuenta//

app.use('view-engine', 'pug');

app.post('/pendientes', function(req, resp){
    //db.run(`INSERT INTO tasks (description) VALUES (?)`, req.body.description);
    resp.send('Inserción finalizada');
});

app.listen(3000);