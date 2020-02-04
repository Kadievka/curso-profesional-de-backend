const User = require('../models').User; //importamos el modelo user.js

module.exports = {//linea típica para iniciar un controlador
    new: function(req, res){//linea típica para iniciar un controlador despliega el formulario
        res.render('sessions/new.pug');//enviar una vista
    }, 
    create: function(req, res){//linea típica para iniciar un controlador envia los datos del formulario
        //console.log('Estoy pasando por el controlador de sesiones');
        User.login(req.body.email, req.body.password)
            .then(user=> {
                if(user){
                    req.session.userId = user.id
                    console.log('la sesion tuvo exito y tengo el id del usuario: ' + req.session.userId);
                    res.json(user);
                }
            })
            .catch(err=>{
                res.json(err);
                console.log(res);
            });
    }, 
};