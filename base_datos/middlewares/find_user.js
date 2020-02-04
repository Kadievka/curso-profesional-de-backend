const User = require('../models').User;

module.exports = function(req, res, next){

    //console.log('holis req.session.userId = ' + req);

    if( !req.session.userId){
        console.log('no obtuve req.session.userId en el middleware');
        return next();
    } 

    User.findByPk(req.session.userId).then(user=>{
        console.log('si obtuve req.session.userId en el middleware');
        if(user){
            req.user = user;
            next();
        }
    });
}