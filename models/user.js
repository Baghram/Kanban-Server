'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};