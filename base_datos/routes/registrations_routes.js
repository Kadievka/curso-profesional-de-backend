const express = require('express'); // líneas típicas de inicio

let RegistraionsController = require('../controllers/registrations'); //Importar el controlador que conecta con la srutas

let router = express.Router(); // líneas típicas de inicio

router.get('/signup', RegistraionsController.new); //definiendo una primera ruta

module.exports = router; // líneas típicas de inicio