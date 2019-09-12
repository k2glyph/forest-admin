module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('contents', {
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    itemId: {
      type: DataTypes.INTEGER,
    },
    itemType: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    contentType: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.STRING,
    },
    embedUrl: {
      type: DataTypes.STRING,
    },
    thumbUrl: {
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
    description: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'contents',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
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

