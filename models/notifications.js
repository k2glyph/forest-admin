module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('notifications', {
    actionType: {
      type: DataTypes.STRING,
    },
    targetId1: {
      type: DataTypes.INTEGER,
      field: 'target_id_1',
    },
    targetId2: {
      type: DataTypes.INTEGER,
      field: 'target_id_2',
    },
    performedAt: {
      type: DataTypes.DATE,
    },
    target1Type: {
      type: DataTypes.STRING,
      field: 'target_1_type',
    },
    target2Type: {
      type: DataTypes.STRING,
      field: 'target_2_type',
    },
    deletedTargetName: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    isRead: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    periods: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'notifications',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'actor_id',
      },
      as: 'actor',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'owner_id',
      },
      as: 'owner',
    });
  };

  return Model;
};

