const sqlite3 = require('sqlite3');
//objeto que haga una conexión a la BD y podamos manipularla
let db = new sqlite3.Database('proyecto-backend');
//let db = new sqlite3.Database(':memory'); // para una BD anónima para pruebas iniciales

db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))');//correr una consulta SQL

db.close();//cerrar la conexion