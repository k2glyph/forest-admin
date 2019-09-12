module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('organization_content_partners', {
    contentPartnerId: {
      type: DataTypes.INTEGER,
    },
    organizationId: {
      type: DataTypes.INTEGER,
    },
    propName: {
      type: DataTypes.STRING,
    },
    propValue: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'organization_content_partners',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

