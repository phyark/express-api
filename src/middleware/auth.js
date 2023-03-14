const jwt = require('jsonwebtoken');
const config = require('../config')
const { sendError } = require('../utils/httpResponseHandler')

const authMiddleware = (req, res, next) => {
  try {
    // 从请求头中获取用户提供的 JWT 令牌
    const headerToken = req.header('Authorization')
    if (!headerToken) {
      throw new Error('未授权访问')
    }
    const token = headerToken.replace('Bearer ', '');

    // 使用密钥解码 JWT 令牌，以获取其中包含的用户信息
    const decoded = jwt.verify(token, config.jwt.secret);
    const now = (Math.ceil(Date.now() / 1000))
    if (now > decoded.exp) {
      throw new Error('token令牌已过期')
    }

    // 在请求对象上添加一个新的属性，以便后续的路由可以访问该用户信息
    req.user = decoded.user;

    next();
  } catch (err) {
    sendError(res, 401, err.message)
  }
};

module.exports = authMiddleware;
