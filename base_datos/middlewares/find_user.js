const User = require('../models').User;

module.exports = function(req, res, next){

    if( !req.session.userId){
        return next();
    } 

    User.findByPk(req.session.userId, {//EAGER LOADING de las tareas de ese usuario
        include:[
            {
                association: 'tasks'// lo hacemos porque ahora entregamos una colección
            }
        ]
    }).then(user=>{
        if(user){
            req.user = user;
            next();
        }
    });
}