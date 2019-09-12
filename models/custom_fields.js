module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('custom_fields', {
    organizationId: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    fieldType: {
      type: DataTypes.STRING,
    },
    required: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    enableSearch: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    enableReports: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    isMultiple: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    visibleToUser: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
  }, {
    tableName: 'custom_fields',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

