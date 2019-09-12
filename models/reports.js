module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('reports', {
    sourceType: {
      type: DataTypes.STRING,
    },
    sourceId: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
    format: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
    requestedAt: {
      type: DataTypes.DATE,
    },
    additionalInfo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    contentType: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'reports',
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
        name: 'requested_by',
      },
      as: 'requestedBy',
    });
  };

  return Model;
};

