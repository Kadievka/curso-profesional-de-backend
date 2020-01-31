const express = require('express');
let TasksController = require('../controllers/tasks'); //esto es un objeto JSON con varios métodos que manejan peticiones http

let router = express.Router();

router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get('/tasks/new', TasksController.new);//es la ruta a la que irá nustro formulario por eso solo es get

module.exports = router;