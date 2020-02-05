'use strict';

const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    email: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL 
  }, {});

  User.login = function(email, password){
    return User.findOne({
      where: {
        email: email
      }
    }).then(user=>{
      if( !user ) return null;
      user.authenticatePassword(password);
      return user.authenticatePassword(password).then(valid=>{
        if(valid) return user;
        return null;
      });
    });
  };

  User.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{

      bcrypt.compare(password, this.password_hash, function(err, valid){
        
        if(err) return rej (err);

        return res(valid);

      });
    });
  };

  User.associate = function(models) {
    User.hasMany(models.Task, {// propiedad para renombrar la asociación
      as: 'tasks',
      foreignKey: 'userId'
    });
  };

  User.beforeCreate(function(user, options){
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
