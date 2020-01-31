const express = require('express');

let router = express.Router();

router.route('/tasks').get(function(req, resp){
    resp.send('Hola mundo desde la subruta get');
}).post(function(req, resp){

});

module.exports = router;