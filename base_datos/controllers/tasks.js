const Task = require('../models').Task
const User = require('../models').User

module.exports = {
    index: function(req, res){
        Task.findAll().then(tasks=>{
            res.render('../views/tasks/index.pug', {tasks});
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    show: function(req,res){
        Task.findByPk(req.params.id, {//PARA HACER EAGER LOADING
            include: [// cada elemento del arreglo es una relación
                {
                    model: User,
                    as: 'user'
                }
            ]
        }).then(function(task){
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
    destroy: function(req,res){
        Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(cuantosElementosEliminados){
            res.redirect('/tasks');
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    create: function(req, res){
        Task.create({
            description: req.body.description,
            userId: req.user.id 
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