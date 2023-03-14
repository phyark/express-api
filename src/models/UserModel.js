const DataTypes = require('sequelize')
const sequelize = require('./connection')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  phone: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  create_time: DataTypes.DATE,
  update_time: DataTypes.DATE,
  last_time: DataTypes.DATE,
  version: DataTypes.BIGINT
}, {
  timestamps: false,
})

module.exports = User