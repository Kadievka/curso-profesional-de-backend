const express = require('express');
let TasksController = require('../controllers/tasks'); //esto es un objeto JSON con varios métodos que manejan peticiones http

let router = express.Router();

router.route('/tasks').get(function(req, resp){
    resp.send('Hola mundo desde la subruta get');
}).post(TasksController.create);

module.exports = router;