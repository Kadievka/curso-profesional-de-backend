'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { // es más avanzado pasar parametros en un JSON con más configuraciones
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
    password_hash: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeCreate(function(user, options){// para encritar el password hacer un hook
    bcrypt.hash(password, 10, function(){
      
    })
  });
  return User;
};