module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('answers', {
    answer: {
      type: DataTypes.STRING,
    },
    correct: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    sequence: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'answers',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.questions, {
      foreignKey: {
        name: 'question_id',
      },
      as: 'question',
    });
  };

  return Model;
};

