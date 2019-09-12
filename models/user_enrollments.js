module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_enrollments', {
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
    userId: {
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
    versionId: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    enrollmentExpiresAt: {
      type: DataTypes.DATE,
    },
    lastInvitedAt: {
      type: DataTypes.DATE,
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
    assessmentStatus: {
      type: DataTypes.STRING,
    },
    completedPercentage: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('INVITED'),
    },
  }, {
    tableName: 'user_enrollments',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'assigned_by',
      },
      as: 'assignedBy',
    });
  };

  return Model;
};

