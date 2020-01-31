'use strict';
module.exports = (sequelize, DataTypes) => {

  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  // Task.associate = function(models) {
  //   associations can be defined here
  // };
  console.log(Task);
  return Task;
};