const db = require('./db')
const config = {
  // token过期时间及密钥
  jwt: {
    secret: 'phyark',
    expires: '1h'
  },
  db
}

module.exports = config