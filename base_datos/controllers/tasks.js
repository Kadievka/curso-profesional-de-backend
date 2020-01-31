const Task = require('../models').Task

module.exports = {
    create: function(req, resp){
        Task.create({
            description: req.body.description
        }).then(result=>{
            resp.json(result);
        }).catch(err=>{
            resp.json(err);
            console.log(err);
        });
    }
};