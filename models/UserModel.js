const DataTypes = require('sequelize')
const sequelize = require('./connection')

const User = sequelize.define('user', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
})

module.exports = User