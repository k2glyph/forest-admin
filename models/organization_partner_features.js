module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('organization_partner_features', {
    provisioned: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'organization_partner_features',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
    });
    Model.belongsTo(models.content_partners, {
      foreignKey: {
        name: 'content_partner_id',
      },
      as: 'contentPartner',
    });
  };

  return Model;
};

