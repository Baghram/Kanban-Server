'use strict';
const encrypt = require("../helper/encrypt")
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
        notNull: true
      }
    } ,
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    } 
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.Password = encrypt(user.Password)
      }
    }
  });
  User.associate = function(models) {
    User.belongsToMany(models.Project,{through: 'ProjectUsers'})
    // associations can be defined here
  };
  return User;
};