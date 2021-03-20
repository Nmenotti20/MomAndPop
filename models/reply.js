'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.belongsTo(models.Review, {
          foreignKey: 'reviewId'
      })
      Reply.belongsTo(models.Business, {
        foreignKey: 'businessId'
      })
    }
  };
  Reply.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    businessId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};
