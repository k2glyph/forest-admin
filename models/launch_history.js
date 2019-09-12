module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('launch_history', {
    sessionId: {
      type: DataTypes.STRING,
    },
    timeSpent: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
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
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'launch_history',
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

