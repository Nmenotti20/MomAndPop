'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Businesses', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      // The email cannot be null, and must be a proper email before creation
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },
      // The password cannot be null
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      service: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // The email cannot be null, and must be a proper email before creation
      streetAddress: {
          type: Sequelize.STRING,
          allowNull: false
      },
      // The password cannot be null
      city: {
          type: Sequelize.STRING,
          allowNull: false
      },

      state: {
          type: Sequelize.STRING,
          allowNull: false
      },

      zipCode: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      phone: {
          type: Sequelize.STRING,
          allowNull: false
      },
      website: {
          type: Sequelize.STRING
      },
      image: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Businesses');
  }
};