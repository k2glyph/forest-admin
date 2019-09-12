module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('enrollment_properties', {
    propName: {
      type: DataTypes.STRING,
    },
    propValue: {
      type: DataTypes.STRING,
    },
    userEnrollmentId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'enrollment_properties',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

