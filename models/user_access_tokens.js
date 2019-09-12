module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_access_tokens', {
    platform: {
      type: DataTypes.STRING,
    },
    accessToken: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'user_access_tokens',
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

