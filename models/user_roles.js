module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('user_roles', {
    itemType: {
      type: DataTypes.STRING,
    },
    itemId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    masterRoleId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'user_roles',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

