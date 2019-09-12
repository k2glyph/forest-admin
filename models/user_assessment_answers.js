module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_assessment_answers', {
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'user_assessment_answers',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.user_assessment_questions, {
      foreignKey: {
        name: 'user_assessment_question_id',
      },
      as: 'userAssessmentQuestion',
    });
    Model.belongsTo(models.answers, {
      foreignKey: {
        name: 'answer_id',
      },
      as: 'answer',
    });
  };

  return Model;
};

