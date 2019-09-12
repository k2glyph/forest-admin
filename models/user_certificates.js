module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_certificates', {
    issueDate: {
      type: DataTypes.DATE,
    },
    expirationDate: {
      type: DataTypes.DATE,
    },
    trainingTime: {
      type: DataTypes.INTEGER,
    },
    downloadUrl: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
    },
    identity: {
      type: DataTypes.STRING,
    },
    courseName: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'user_certificates',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.certificates, {
      foreignKey: {
        name: 'certificate_id',
      },
      as: 'certificate',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
    Model.belongsTo(models.user_enrollments, {
      foreignKey: {
        name: 'user_enrollment_id',
      },
      as: 'userEnrollment',
    });
  };

  return Model;
};

