'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Task, {
      through: 'TaskCategories', // a través de... esta tabla
      as: 'tasks'
    });
  };
  return Category;
};