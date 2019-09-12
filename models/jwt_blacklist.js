module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('jwt_blacklist', {
    jti: {
      type: DataTypes.STRING,
    },
    exp: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'jwt_blacklist',
    timestamps: false,
  });

  Model.associate = (models) => {
  };

  return Model;
};

