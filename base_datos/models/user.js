'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { // es más avanzado pasar parametros en un JSON con más configuraciones
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL //indica que este campo existe en este modelo pero que no se guardará como tal en la BD
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeCreate(function(user, options){// para encritar el password hacer un hook
    return new Promise((res,rej)=>{
      if(user.password){
        bcrypt.hash(user.password, 10, function(err, hash){
          user.password_hash = hash;
          res();
        });
      }
    });
  });
  return User;
};