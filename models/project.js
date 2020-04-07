'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    Title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    } 
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(models.User,{through: 'ProjectUsers'})
    // associations can be defined here
  };
  return Project;
};