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

  User.login = function(email, password){
    //Buscar al usuario
    return User.findOne({
      where: {
        email: email// no lo quiero en shorthand para saber que una es una tabla en BD y el otro es un argumento que recibe la función
      }
    }).then(user=>{//compara el texto plano en BD con el password encriptado nuevamente
      if( !user ) return null;
      return user.authenticatePassword(password);
    });
  };

  User.prototype.authenticatePassword = function(password){// esto es una instancia del modelo User
    return new Promise((res,rej)=>{

      bcrypt.compare(password, this.password.hash, function(err, valid){

        if(err) return rej (err);

        res(valid);

      });
    });
  };

  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(function(user, options){// para encriptar el password hacer un hook
    return new Promise((res,rej)=>{
      if(user.password){
        bcrypt.hash(user.password, null, null, function(err, hash){
          user.password_hash = hash;
          res();
        });
      }
    });
  });
  return User;
};