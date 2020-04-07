'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    } ,
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    } ,
    ProjectId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Project)
    // associations can be defined here
  };
  return Task;
};