const BaseController = require('../controllers/BaseController')
class UserService extends BaseController{
  constructor() {
    super()
    this.BaseController = new BaseController()
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