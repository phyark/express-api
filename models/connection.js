const Sequelize = require('sequelize')
const config = require('../config/db')

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.localhost,
    dialect: config.driver,
    logging: console.log,
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
  }
)

module.exports = sequelize