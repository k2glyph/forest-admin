module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('enrollment_trackers', {
    status: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('invited'),
    },
    sourceType: {
      type: DataTypes.STRING,
    },
    sourceId: {
      type: DataTypes.INTEGER,
    },
    userEnrollmentId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    toCompleteAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'enrollment_trackers',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'assigned_by',
      },
      as: 'assignedBy',
    });
  };

  return Model;
};

