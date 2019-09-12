module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('notification_settings', {
    notificationUserAdd: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationUserDelete: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationDeleteTeam: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationAddManagerToTeam: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationRemoveManagerToTeam: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationEditPublicCourse: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationEditPrivateCourse: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationAssignCourse: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationCourseOverdue: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationCourseComplete: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    notificationAssessmentFailed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    notificationCourseExpire: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationDomainChange: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationTrailAccountExpired: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationWelcomeMail: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationAssignCourse: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationCourseOverdue: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationCourseComplete: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    emailNotificationAssessmentFailed: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    emailNotificationCourseExpire: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    emailNotificationAddManagerToTeam: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    emailNotificationRemoveManagerToTeam: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
  }, {
    tableName: 'notification_settings',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
  };

  return Model;
};

