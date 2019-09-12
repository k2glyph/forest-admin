module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_enrollment_versions', {
    invited: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    enrolled: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    completed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    invitedAt: {
      type: DataTypes.DATE,
    },
    enrolledAt: {
      type: DataTypes.DATE,
    },
    completedAt: {
      type: DataTypes.DATE,
    },
    toCompleteAt: {
      type: DataTypes.DATE,
    },
    started: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    startedAt: {
      type: DataTypes.DATE,
    },
    versionId: {
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
    userEnrollmentId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    assessmentStatus: {
      type: DataTypes.STRING,
    },
    totalTimeSpent: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    score: {
      type: DataTypes.INTEGER,
    },
    complianceCompleted: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    complianceCompletedAt: {
      type: DataTypes.DATE,
    },
    completedPercentage: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('invited'),
    },
  }, {
    tableName: 'user_enrollment_versions',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'assigned_by',
      },
      as: 'assignedBy',
    });
  };

  return Model;
};

