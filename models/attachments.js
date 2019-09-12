module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('attachments', {
    url: {
      type: DataTypes.STRING,
    },
    contentType: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    previewUrl: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'attachments',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.courses, {
      foreignKey: {
        name: 'course_id',
      },
      as: 'course',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
  };

  return Model;
};

