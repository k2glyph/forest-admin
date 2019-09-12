module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('time_access_logs', {
    sourceType: {
      type: DataTypes.STRING,
    },
    sourceId: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    timeSpent: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'time_access_logs',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'user',
    });
    Model.belongsTo(models.ahoy_visits, {
      foreignKey: {
        name: 'ahoy_visit_id',
      },
      as: 'ahoyVisit',
    });
  };

  return Model;
};

