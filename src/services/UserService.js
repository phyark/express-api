const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config')
const BaseController = require('../controllers/BaseController')
const User = require('../models/UserModel')
class UserService extends BaseController {
  constructor() {
    super()
    this.BaseController = new BaseController()
  }

  // 注册
  register(data) {
    return new Promise(async (resolve, reject) => {
      try {
        // 密码加密
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        // 插入用户数据到数据库
        const record = await User.create({
          username: data.username,
          password: hashedPassword,
          version: 0
        })

        // 插入成功
        if (record) {
          resolve(record.username)
        }
      } catch (err) {
        console.log('注册失败: ' + err + '(用户名已存在)')
        reject({ message: '用户名已存在' })
      }
    })
  }

  // 登录
  login(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { username, password } = data
        // 查询是否有对应用户
        const user = await User.findOne({ where: { username } })
        if (!user) {
          throw new Error('用户不存在')
        }

        // 判断密码是否匹配
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          throw new Error('用户名或密码不匹配')
        }

        // 创建 token 并返回
        const { secret, expires } = config.jwt
        const token = jwt.sign({ user }, secret, { expiresIn: expires });

        resolve(token)
      } catch (error) {
        reject(error || '登录失败')
      }
    })
  }

  // 获取当前用户信息
  getInfo(id) {
    return new Promise(async (resolve, reject) => {
      try {
        // 除了密码，返回用户信息
        const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } })
        resolve(user)
      } catch (err) {
        reject(err.message)
      }
    })
  }
}

module.exports = UserService