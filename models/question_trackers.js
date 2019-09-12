module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('question_trackers', {
    userEnrollmentId: {
      type: DataTypes.INTEGER,
    },
    questionId: {
      type: DataTypes.INTEGER,
    },
    questionType: {
      type: DataTypes.STRING,
    },
    correct: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'question_trackers',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

