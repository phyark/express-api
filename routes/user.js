const router = require('express').Router()
const UserController = require('../controllers/UserController')
const userConllor = new UserController()

// 注册
router.post('/register', userConllor.register.bind(userConllor))

// 登录
router.post('/login', userConllor.login.bind(userConllor))

module.exports = router