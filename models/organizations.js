module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('organizations', {
    customKey: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address1: {
      type: DataTypes.STRING,
      field: 'address_1',
    },
    address2: {
      type: DataTypes.STRING,
      field: 'address_2',
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    logo: {
      type: DataTypes.STRING,
    },
    favicon: {
      type: DataTypes.STRING,
    },
    defaultSenderNoreply: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    primaryColor: {
      type: DataTypes.STRING,
    },
    secondaryColor: {
      type: DataTypes.STRING,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    trialEndsOn: {
      type: DataTypes.DATE,
    },
    contactName: {
      type: DataTypes.STRING,
    },
    pageTitle: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('Auzmor Learn'),
    },
    customDomain: {
      type: DataTypes.STRING,
    },
    customDomainEnabled: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
  }, {
    tableName: 'organizations',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

