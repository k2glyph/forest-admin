module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('categories', {
    title: {
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
  }, {
    tableName: 'categories',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.categories, {
      foreignKey: {
        name: 'parent_id',
      },
      as: 'parent',
    });
  };

  return Model;
};

