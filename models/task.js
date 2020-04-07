'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    Title: DataTypes.STRING,
    Category: DataTypes.STRING,
    Description: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};