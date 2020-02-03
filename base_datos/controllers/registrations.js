const User = require('../models').User; //importamos el modelo user.js

module.exports = {//linea típica para un controlador
    new: function(req, res){
        res.render('registrations/new.pug');//enviar una vista
    },
    create: function(req, res){
        let data = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(data).then(result=>{
            res.json(result);
        }).catch(err=>{
            res.json(err);
        });
    },
}

