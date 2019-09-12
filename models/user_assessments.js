module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_assessments', {
    score: {
      type: DataTypes.FLOAT,
      defaultValue: Sequelize.literal('0'),
    },
    attempt: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    completed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    userId: {
      type: DataTypes.INTEGER,
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
    totalTimeSpent: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
  }, {
    tableName: 'user_assessments',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

