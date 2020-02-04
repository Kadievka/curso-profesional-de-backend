'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskCategories = sequelize.define('TaskCategories', {
    taskId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  TaskCategories.associate = function(models) {
    
    Task.belongsToMany(models.Task, {
      through: 'TaskCategories',
      as: 'tasks'
    });

  };
  return TaskCategories;
};