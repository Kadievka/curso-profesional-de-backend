const Task = require('../models').Task
const User = require('../models').User

module.exports = {
    index: function(req, res){
        Task.findAll().then(tasks=>{
            res.render('../views/tasks/index.pug', {tasks: req.user.tasks});
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    show: function(req,res){
        Task.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user'
                },
                'categories'
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
        }).then(task=>{
            let categoryIds = req.body.categories.split(",");
            task.addCategories(categoryIds).then(()=>{
                res.redirect('/tasks/');
            });
        }).catch(err=>{
            res.json(err);
            console.log(err);
        });
    },
    update: function(req, res){
        let task = Task.findByPk(req.params.id).then(task => {
            task.description = req.body.description;
            task.save().then(()=>{
            let categoryIds = req.body.categories.split(",");
                task.addCategories(categoryIds).then(()=>{
                    res.redirect('/tasks/'+req.params.id);
                });
            });
        });
    },
    new: function(req,res){
        res.render('../views/tasks/new.pug');
    }
};