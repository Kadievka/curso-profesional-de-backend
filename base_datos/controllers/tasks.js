const Task = require('../models').Task

module.exports = {
    index: function(req, resp){
        Task.findAll().then(tasks=>{
            //resp.json(tasks);
            resp.render('../views/tasks/index.pug', {task});
        }).catch(err=>{
            resp.json(err);
            console.log(err);
        });
    },
    show: function(req,res){
        //res.send(req.params.id);//inspeccionar el objeto params
        Task.findByPk(req.params.id).then(function(task){
            //res.json(task);
            res.render('../views/tasks/show.pug', {task: task});
        }).catch(err=>{
            res.json(err);
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