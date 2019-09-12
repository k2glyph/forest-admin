module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
    },
    encryptedPassword: {
      type: DataTypes.STRING,
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
    },
    resetPasswordSentAt: {
      type: DataTypes.DATE,
    },
    rememberCreatedAt: {
      type: DataTypes.DATE,
    },
    lastSeenAt: {
      type: DataTypes.DATE,
    },
    signInCount: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    currentSignInAt: {
      type: DataTypes.DATE,
    },
    lastSignInAt: {
      type: DataTypes.DATE,
    },
    currentSignInIp: {
      type: DataTypes.STRING,
    },
    lastSignInIp: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('PENDING'),
    },
    mobileNo: {
      type: DataTypes.STRING,
    },
    timeZone: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    invitationToken: {
      type: DataTypes.STRING,
    },
    invitationCreatedAt: {
      type: DataTypes.DATE,
    },
    invitationSentAt: {
      type: DataTypes.DATE,
    },
    invitationAcceptedAt: {
      type: DataTypes.DATE,
    },
    invitationLimit: {
      type: DataTypes.INTEGER,
    },
    invitedByType: {
      type: DataTypes.STRING,
    },
    invitationsCount: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    organizationId: {
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    originalInvitationToken: {
      type: DataTypes.STRING,
    },
    profileColor: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'invited_by_id',
      },
      as: 'invitedBy',
    });
  };

  return Model;
};

