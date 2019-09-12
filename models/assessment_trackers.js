module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('assessment_trackers', {
    correctAnswers: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    wrongAnswers: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    attemptsConsumed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    attemptsLeft: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    attemptsSucceeded: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    attemptsFailed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
  }, {
    tableName: 'assessment_trackers',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.user_enrollments, {
      foreignKey: {
        name: 'user_enrollment_id',
      },
      as: 'userEnrollment',
    });
  };

  return Model;
};

