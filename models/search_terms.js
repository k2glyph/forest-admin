module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('search_terms', {
    term: {
      type: DataTypes.STRING,
    },
    resultCount: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    source: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('Course'),
    },
  }, {
    tableName: 'search_terms',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'performer_id',
      },
      as: 'performer',
    });
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
    });
  };

  return Model;
};

