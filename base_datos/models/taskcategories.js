'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskCategories = sequelize.define('TaskCategories', {
    taskId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});

  TaskCategories.associate = function(models) {
    
    TaskCategories.belongsToMany(models.Task, {
      through: 'Tasks',
      as: 'tasks',
      foreignKey: taskId
    });

    TaskCategories.belongsToMany(models.Category, {
      through: 'Categories',
      as: 'categories',
      foreignKey: categoryId
    });

  };

  return TaskCategories;
};