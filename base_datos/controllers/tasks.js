const Task = require('../models').Task

module.exports = {
    index: function(req, res){
        Task.findAll().then(tasks=>{
            //resp.json(tasks);
            res.render('../views/tasks/index.pug', {task});
        }).catch(err=>{
            res.json(err);
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
    create: function(req, res){
        Task.create({
            description: req.body.description
        }).then(result=>{
            res.json(result);
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    update: function(){

    },
    new: function(req,res){
        res.render('../views/tasks/new.pug');
    }
};