module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('form_field_values', {
    sourceId: {
      type: DataTypes.INTEGER,
    },
    sourceType: {
      type: DataTypes.STRING,
    },
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
    tableName: 'form_field_values',
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

