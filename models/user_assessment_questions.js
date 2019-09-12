module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_assessment_questions', {
    correct: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    questionId: {
      type: DataTypes.INTEGER,
    },
    userAssessmentId: {
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
    tableName: 'user_assessment_questions',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

