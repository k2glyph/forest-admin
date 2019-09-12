module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('master_roles', {
    name: {
      type: DataTypes.STRING,
    },
    organizationId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'master_roles',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

