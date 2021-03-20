'use strict';
const bcrypt = require("bcryptjs");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business.hasMany(models.Review, {
        foreignKey: 'businessId',
        onDelete: "cascade"
      })
      Business.hasMany(models.Reply, {
        foreignKey: 'businessId'
      })
    }
  };
  Business.init({
    uuid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    // The password cannot be null
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The email cannot be null, and must be a proper email before creation
    streetAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // The password cannot be null
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },

    state: {
        type: DataTypes.STRING,
        allowNull: false
    },

    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING
    },
    image: {
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
    modelName: 'Business',
  });

  Business.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
  Business.addHook("beforeCreate", Business => {
      Business.password = bcrypt.hashSync(
          Business.password,
          bcrypt.genSaltSync(10),
          null
      );
  });
  return Business;
};