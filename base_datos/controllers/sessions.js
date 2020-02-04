const User = require('../models').User;

module.exports = {
    new: function(req, res){
        res.render('sessions/new.pug');
    }, 
    create: function(req, res){
        User.login(req.body.email, req.body.password)
            .then(user=> {
                if(user){
                    req.session.userId = user.id
                    //res.json(user);
                    res.redirect('/');
                }
            })
            .catch(err=>{
                res.json(err);
                console.log(res);
            });
    }, 
    destroy: function(req, res){//eliminará el userId y todos los valores para esa sesión
        req.session.destroy(function(){
            res.redirect('/sessions');
        }); 
    }
};