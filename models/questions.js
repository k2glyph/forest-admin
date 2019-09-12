module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('questions', {
    question: {
      type: DataTypes.STRING,
    },
    questionType: {
      type: DataTypes.STRING,
    },
    shuffleAnswers: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    correctResponse: {
      type: DataTypes.STRING,
    },
    incorrectResponse: {
      type: DataTypes.STRING,
    },
    assessmentId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'questions',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

