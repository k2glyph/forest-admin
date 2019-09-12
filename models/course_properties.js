module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('course_properties', {
    courseId: {
      type: DataTypes.INTEGER,
    },
    propType: {
      type: DataTypes.STRING,
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
    tableName: 'course_properties',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

