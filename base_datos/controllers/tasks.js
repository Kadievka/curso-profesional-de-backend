const Task = require('../models').Task

module.exports = {
    home: function(req, resp){
        Task.findAll().then(function(tasks){
            resp.render('../views/tasks/index.pug', {tasks: tasks}); 
            
        });
    }
};