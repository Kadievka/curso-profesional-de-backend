const Task = require('../models').Task

module.exports = {
    create: function(req, resp){
        Task.findAll().then((tasks)=>{
            resp.render('../views/tasks/index.pug', {tasks: tasks});
        }).catch(err=>{
            resp.json(err);
            console.log(err);
        });
    },
    new: function(req,resp){
        resp.render('../views/tasks/new.pug');
    }
};