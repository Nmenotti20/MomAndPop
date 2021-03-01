// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
const { authorize } = require("passport");
const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');
// Creating our User model
const User = sequelize.define("user", {
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
});

//   User.associate = function(models) {
//     User.hasMany(models.Child, {
//       foreignKey: 'UserId',
//       onDelete: "cascade"
//     });
//   };

// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
User.prototype.validPassword = function (password) {
return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
User.addHook("beforeCreate", User => {
    User.password = bcrypt.hashSync(
        User.password,
        bcrypt.genSaltSync(10),
        null
);
});

User.sync();

module.exports = User;