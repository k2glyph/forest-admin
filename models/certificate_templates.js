module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('certificate_templates', {
    name: {
      type: DataTypes.STRING,
    },
    themeId: {
      type: DataTypes.INTEGER,
      field: 'theme_id',
    },
    hasCourseDescription: {
      type: DataTypes.INTEGER,
      field: 'has_course_description',
      defaultValue: Sequelize.literal('0'),
    },
    hasCompletionDate: {
      type: DataTypes.INTEGER,
      field: 'has_completion_date',
      defaultValue: Sequelize.literal('0'),
    },
    hasValidityPeriodInMonths: {
      type: DataTypes.INTEGER,
      field: 'has_validity_period_in_months',
      defaultValue: Sequelize.literal('0'),
    },
    hasLogoUrl: {
      type: DataTypes.INTEGER,
      field: 'has_logo_url',
      defaultValue: Sequelize.literal('0'),
    },
    hasSignature: {
      type: DataTypes.INTEGER,
      field: 'has_signature',
      defaultValue: Sequelize.literal('0'),
    },
    hasBackgroundColor: {
      type: DataTypes.INTEGER,
      field: 'has_background_color',
      defaultValue: Sequelize.literal('0'),
    },
    hasTextColor: {
      type: DataTypes.INTEGER,
      field: 'has_text_color',
      defaultValue: Sequelize.literal('0'),
    },
    hasTimeSpentOnTraining: {
      type: DataTypes.INTEGER,
      field: 'has_time_spent_on_training',
      defaultValue: Sequelize.literal('0'),
    },
    hasOrganizationName: {
      type: DataTypes.INTEGER,
      field: 'has_organization_name',
      defaultValue: Sequelize.literal('0'),
    },
    hasCertificateId: {
      type: DataTypes.INTEGER,
      field: 'has_certificate_id',
      defaultValue: Sequelize.literal('0'),
    },
    isVisible: {
      type: DataTypes.INTEGER,
      field: 'is_visible',
      defaultValue: Sequelize.literal('0'),
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    backgroundColor: {
      type: DataTypes.STRING,
      field: 'background_color',
      defaultValue: Sequelize.literal('#FFFFFF'),
    },
    textColor: {
      type: DataTypes.STRING,
      field: 'text_color',
      defaultValue: Sequelize.literal('#000000'),
    },
    description: {
      type: DataTypes.STRING,
    },
    validityPeriodInMonths: {
      type: DataTypes.INTEGER,
      field: 'validity_period_in_months',
    },
    logoUrl: {
      type: DataTypes.STRING,
      field: 'logo_url',
    },
    signature: {
      type: DataTypes.STRING,
    },
    authorityName: {
      type: DataTypes.STRING,
      field: 'authority_name',
    },
    authorityTitle: {
      type: DataTypes.STRING,
      field: 'authority_title',
    },
    heading: {
      type: DataTypes.STRING,
    },
    line1: {
      type: DataTypes.STRING,
    },
    line2: {
      type: DataTypes.STRING,
    },
    organizationName: {
      type: DataTypes.STRING,
      field: 'organization_name',
    },
  }, {
    tableName: 'certificate_templates',
  });

  Model.associate = (models) => {
    Model.belongsTo(models.organizations, {
      foreignKey: {
        name: 'organization_id',
      },
      as: 'organization',
    });
  };

  return Model;
};

