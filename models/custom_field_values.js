module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('custom_field_values', {
    fieldValue: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'custom_field_values',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.custom_fields, {
      foreignKey: {
        name: 'custom_field_id',
      },
      as: 'customField',
    });
  };

  return Model;
};

