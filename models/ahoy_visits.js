module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('ahoy_visits', {
    visitToken: {
      type: DataTypes.STRING,
    },
    visitorToken: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    ip: {
      type: DataTypes.STRING,
    },
    userAgent: {
      type: DataTypes.STRING,
    },
    referrer: {
      type: DataTypes.STRING,
    },
    referringDomain: {
      type: DataTypes.STRING,
    },
    landingPage: {
      type: DataTypes.STRING,
    },
    browser: {
      type: DataTypes.STRING,
    },
    os: {
      type: DataTypes.STRING,
    },
    deviceType: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    utmSource: {
      type: DataTypes.STRING,
    },
    utmMedium: {
      type: DataTypes.STRING,
    },
    utmTerm: {
      type: DataTypes.STRING,
    },
    utmContent: {
      type: DataTypes.STRING,
    },
    utmCampaign: {
      type: DataTypes.STRING,
    },
    startedAt: {
      type: DataTypes.DATE,
    },
    completedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'ahoy_visits',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
  };

  return Model;
};

