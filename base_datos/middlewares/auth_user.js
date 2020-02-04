
module.exports = function(req, res, next){
    
    if ( !req.originalUrl.includes("tasks") ) return next(); // esto significa que si la url no contiene la palabra tasks, no tienes por qué hacer verificaciób de usuario

    if(req.session.userId) return next(); //pero si contiene la palaba tasks entonce ve si el usuario está autenticado o no

    res.redirect('/sessions');
}