module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('learner_progress', {
    userEnrollmentId: {
      type: DataTypes.INTEGER,
    },
    chapterId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    totalTimeSpent: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    started: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    startedAt: {
      type: DataTypes.DATE,
    },
    completed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    completedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'learner_progress',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

