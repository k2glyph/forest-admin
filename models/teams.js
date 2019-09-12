module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('teams', {
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    organizationId: {
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'teams',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'created_by',
      },
      as: 'createdBy',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'updated_by',
      },
      as: 'updatedBy',
    });
  };

  return Model;
};

