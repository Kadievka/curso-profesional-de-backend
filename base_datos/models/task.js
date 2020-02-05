'use strict';

const socket = require('../realtime/client');//importo socket client

module.exports = (sequelize, DataTypes) => {

  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  Task.associate = function(models) {

    Task.belongsTo(models.User, {
      as: 'user'
    });

    Task.belongsToMany(models.Category, {
      through: 'TaskCategories', 
      as: 'categories'
    });

  };

    //otro hook

  Task.afterCreate(function(task, options){//luego de creada una nueva tarea, la transmito al cliente de websocket
    socket.emit('new_task', task );//enviar mensaje al cliente con todas las propiedades de task
  });

  return Task;
};