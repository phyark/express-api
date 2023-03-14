const router = require('express').Router()
const UserController = require('../controllers/UserController')
const userConllor = new UserController()
const authMiddleware = require('../middleware/auth')

// 注册
router.post('/register', userConllor.register.bind(userConllor))

// 登录
router.post('/login', userConllor.login.bind(userConllor))

// 鉴权中间件
router.use(authMiddleware);

// 查询用户信息
router.post('/getInfo', userConllor.getInfo.bind(userConllor))

module.exports = router