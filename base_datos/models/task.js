'use strict';
module.exports = (sequelize, DataTypes) => {

  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  Task.associate = function(models) {
    Task.belongsTo(models.User, {// propiedad para renombrar la asociación
      as: 'user'
    });
  };

  //ahora el objeto task tine una propiedad llamada User

  return Task;
};