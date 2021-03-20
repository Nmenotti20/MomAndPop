const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');
// Creating our User model
const Reply = sequelize.define("reply", {
        businessId: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: 0
        },
        postId: {
            type: Sequelize.UUID,
            allowNull: false,
            defaultValue: 0
        },
        message: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    
    Reply.associate = function(models) {
        Reply.belongsTo(models.Post, {
            foreignKey: 'postId'
        })
    }





module.exports = Reply;
