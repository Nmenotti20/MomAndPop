const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.

const sequelize = new Sequelize('rm193sc0beyrr16d', 'mxp83o50jx2kczpy', process.env.db_password, {
  host: 'xlf3ljx3beaucz9x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// Exports the connection for other files to use
module.exports = sequelize;