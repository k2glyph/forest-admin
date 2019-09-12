module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('content_partners', {
    name: {
      type: DataTypes.STRING,
    },
    partnerId: {
      type: DataTypes.STRING,
    },
    partnerKey: {
      type: DataTypes.STRING,
    },
    partnerSecret: {
      type: DataTypes.STRING,
    },
    environment: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('development'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'content_partners',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

