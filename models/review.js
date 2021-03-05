const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');
// Creating our User model
const Review = sequelize.define("review", {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    businessId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Review.associate = function(models) {
    Review.belongsTo(models.User, {
        foreignKey: 'userId'
    })
    Review.belongsTo(models.Business, {
        foreignKey: 'businessId'
    })
}

Review.sync();

module.exports = Review;