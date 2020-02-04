'use strict';
module.exports = (sequelize, DataTypes) => {

  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  Task.associate = function(models) {

    Task.belongsTo(models.User, {
      as: 'user'
    });

    Task.belongsToMany(models.Category, {
      through: 'TaskCategories', // a través de... esta tabla
      as: 'categories'
    });

  };

  return Task;
};