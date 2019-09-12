module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('permissions', {
    resource: {
      type: DataTypes.STRING,
    },
    action: {
      type: DataTypes.STRING,
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
    tableName: 'permissions',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

