module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('ahoy_events', {
    visitId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    properties: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'ahoy_events',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
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

