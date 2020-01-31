const Task = require('../models').Task

module.exports = {
    index: function(req, resp){
        Task.findAll().then(tasks=>{
            //resp.json(tasks);
            resp.render('../views/tasks/index.pug', {tasks: tasks});
        }).catch(err=>{
            resp.json(err);
            console.log(err);
        });
    },
    create: function(req, resp){
        Task.create({
            description: req.body.description
        }).then(result=>{
            resp.json(result);
        }).catch(err=>{
            resp.json(err);
            console.log(err);
        });
    },
    new: function(req,resp){
        resp.render('../views/tasks/new.pug');
    }
};