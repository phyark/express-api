const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.localhost,
    dialect: config.db.driver,
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