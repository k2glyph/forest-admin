module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('course_teams', {
    teamId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
    teamName: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'course_teams',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

