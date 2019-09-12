module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('certificates', {
    courseTitle: {
      type: DataTypes.STRING,
      field: 'course_title',
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
    backgroundColor: {
      type: DataTypes.STRING,
      field: 'background_color',
    },
    textColor: {
      type: DataTypes.STRING,
      field: 'text_color',
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
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    organizationName: {
      type: DataTypes.STRING,
      field: 'organization_name',
    },
    previewUrl: {
      type: DataTypes.STRING,
      field: 'preview_url',
    },
  }, {
    tableName: 'certificates',
  });

  Model.associate = (models) => {
    Model.belongsTo(models.certificate_templates, {
      foreignKey: {
        name: 'certificate_template_id',
      },
      as: 'certificateTemplate',
    });
    Model.belongsTo(models.courses, {
      foreignKey: {
        name: 'course_id',
      },
      as: 'course',
    });
  };

  return Model;
};

