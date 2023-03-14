/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-01-20 09:30:33
 * @Author: liukunjia
 * @LastEditors: liukunjia
 * @LastEditTime: 2023-03-14 15:37:28
 */
const BaseController = require('./BaseController')
const UserService = require('../services/UserService')

class UserController extends BaseController {
  constructor() {
    super()
    this.userService = new UserService()
  }

  // 注册
  async register(req, res) {
    try {
      const { username, password } = req.body
      if (!username || !password) { throw new Error('用户名和密码不能为空！') }
      const data = await this.userService.register({ username, password })
      console.log('*** 新用户注册:', data)
      this.handleSuccess(res, null, '注册成功')
    } catch (error) {
      this.handleError(res, 400, error.message)
    }
  }

  // 登录
  async login(req, res) {
    try {
      const { username, password } = req.body
      if (!username || !password) { new Error('用户名和密码不能为空！') }
      const data = await this.userService.login({ username, password })
      this.handleSuccess(res, data, '登录成功')
    } catch (error) {
      this.handleError(res, 400, error.message)
    }
  }

  // 查询当前用户信息
  async getInfo(req, res) {
    try {
      const data = await this.userService.getInfo(req.user.id)
      this.handleSuccess(res, data, '操作成功')
    } catch (error) {
      this.handleError(res, 400, error.message)
    }
  }

}

module.exports = UserController