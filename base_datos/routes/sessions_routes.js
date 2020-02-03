const express = require('express'); // líneas típicas de inicio

let SessionsController = require('../controllers/sessions'); //Importar el controlador que conecta con las rutas

let router = express.Router(); // líneas típicas de inicio

router.route('/sessions', )
        .get(SessionsController.new)
        .post(SessionsController.create); 

module.exports = router; // líneas típicas de inicio