const DataTypes = require('sequelize')
const sequelize = require('./connection')

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  createTime: DataTypes.BIGINT,
  lastTime: DataTypes.BIGINT,
  version: DataTypes.BIGINT
}, {
  timestamps: false,
})

module.exports = User