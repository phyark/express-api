const crypto = require('crypto')
const BaseController = require('../controllers/BaseController')
const User = require('../models/UserModel')
class UserService extends BaseController{
  constructor() {
    super()
    this.BaseController = new BaseController()
  }

  // 注册
  register(data) {
    return new Promise((resolve, reject) => {
      try {
        const now = Date.now();
        const md5 = crypto.createHash('md5')
        const password = md5.update(data.password).digest('hex')
        User.create({
          id: now,
          username: data.username,
          password: password,
          createTime: now,
          lastTime: now,
          version: 0
        }).then(function (p) {
          resolve(p.username)
          console.log('注册成功' + JSON.stringify(p))
        }).catch(function (err) {
          reject(err)
          console.log('注册失败' + err)
        })
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }

  // 登录
  login(username, password) {
    return new Promise((resolve, reject) => {
      try {
        resolve('TkkeoandFa.fjDgApHoMjHHGasGDpoFdasFSfsdFfgsadfgadDDSasDFa.FFA2sdGaydUSasdAS')
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = UserService