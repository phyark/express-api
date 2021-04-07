const BaseController = require('./BaseController')
const UserService = require('../services/UserService')

class UserController extends BaseController {
  constructor() {
    super()
    this.userService = new UserService()
  }

  // 登录
  async login(req, res) {
    try {
      const { username, password } = req.body
      if (!username || !password) { new Error('用户名和密码不能为空！')}
      const data = await this.userService.login(username, password)
      res.status(200).json(this.handleSuccess(data))
    } catch (e) {
      res.status(200).json(this.handleError(400, e.message))
    }
  }
}

module.exports = UserController