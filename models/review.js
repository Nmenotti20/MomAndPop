const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');
// Creating our User model
const Review = sequelize.define("review", {
    userId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: 0
    },
    businessId: {
        type: Sequelize.UUID,
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
    },
    businessName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userImage: {
        type: Sequelize.STRING
    }
});

Review.associate = function(models) {
    Review.belongsTo(models.User, {
        foreignKey: 'userId'
    })
    Review.belongsTo(models.Business, {
        foreignKey: 'businessId'
    })
    Review.hasMany(models.Reply, {
        foreignKey: 'reviewId'
    })
}

// Review.sync();

module.exports = Review;