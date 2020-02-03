const Task = require('../models').Task

module.exports = {
    index: function(req, res){
        Task.findAll().then(tasks=>{
            res.render('../views/tasks/index.pug', {task});
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    show: function(req,res){
        Task.findByPk(req.params.id).then(function(task){
            res.render('../views/tasks/show.pug', {task});
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    edit: function(req,res){
        Task.findByPk(req.params.id).then(function(task){
            res.render('../views/tasks/edit.pug', {task});
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
    update: function(req, res){
        Task.update({description: req.body.description},{
            where: {
                id: req.params.id
            }
        }).then(function(response){
            res.redirect('/tasks/' + req.params.id);
        });
    },
    new: function(req,res){
        res.render('../views/tasks/new.pug');
    }
};