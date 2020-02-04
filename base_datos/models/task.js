'use strict';
module.exports = (sequelize, DataTypes) => {

  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  Task.associate = function(models) {
    Task.belongsTo(models.User);
  };
  return Task;
};