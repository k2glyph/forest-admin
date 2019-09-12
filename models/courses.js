module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('courses', {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    longDescription: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    validity: {
      type: DataTypes.INTEGER,
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('1'),
    },
    duration: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('DRAFT'),
    },
    skipAssessment: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    publishedAt: {
      type: DataTypes.DATE,
    },
    private: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    assessmentAttempts: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('3'),
    },
    passPercentage: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('70'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    autoAssignIntervalInMonths: {
      type: DataTypes.INTEGER,
    },
    externalId: {
      type: DataTypes.STRING,
    },
    launchUrl: {
      type: DataTypes.STRING,
    },
    learningStandard: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    reminderType: {
      type: DataTypes.STRING,
    },
    reminderFrequencyInDays: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('3'),
    },
    fillType: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('cover'),
    },
    reportingType: {
      type: DataTypes.STRING,
    },
    learningStandardVersion: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.literal('Native'),
    },
    isHosted: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    slug: {
      type: DataTypes.STRING,
    },
    recent: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    hostingCompleted: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
    isDurationConfigured: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.literal('0'),
    },
  }, {
    tableName: 'courses',
    underscored: true,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.categories, {
      foreignKey: {
        name: 'category_id',
      },
      as: 'category',
    });
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'created_by',
      },
      as: 'createdBy',
    });
    Model.belongsTo(models.users, {
      foreignKey: {
        name: 'updated_by',
      },
      as: 'updatedBy',
    });
  };

  return Model;
};

