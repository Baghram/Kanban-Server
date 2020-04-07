'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectUser = sequelize.define('ProjectUser', {
    ProjectId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  ProjectUser.associate = function(models) {
    // associations can be defined here
  };
  return ProjectUser;
};