const User = require('../models').User; //importamos el modelo user.js

module.exports = {//linea típica para iniciar un controlador
    new: function(req, res){//linea típica para iniciar un controlador despliega el formulario
        res.render('sessions/new.pug');//enviar una vista
    }, 
    create: function(req, res){//linea típica para iniciar un controlador despliega el formulario
        User.login(req.body.email, req.body.password)
            .then(user=> {
                if(user){
                    req.session.userId = user.id
                }
            })
            .catch(err=>{
                res.json(err);
                console.log(res);
            });
    }, 
};