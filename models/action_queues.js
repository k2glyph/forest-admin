module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('action_queues', {
    itemType: {
      type: DataTypes.STRING,
    },
    itemId: {
      type: DataTypes.INTEGER,
    },
    action: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('QUEUED'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    message: {
      type: DataTypes.STRING,
    },
    additionalInfo: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'action_queues',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
    });
  };

  return Model;
};

