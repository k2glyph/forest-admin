module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('chapters', {
    sequence: {
      type: DataTypes.INTEGER,
    },
    chapterType: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    skipTime: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'chapters',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

