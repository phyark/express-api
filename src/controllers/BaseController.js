/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-01-20 09:30:33
 * @Author: liukunjia
 * @LastEditors: liukunjia
 * @LastEditTime: 2023-03-14 11:46:20
 */
const { sendError, sendSuccess } = require('../utils/httpResponseHandler')
class BaseController {
  constructor(res) {
    this.res = res
  }

  // 操作错误
  handleError(res,code, msg) {
    return sendError(res, code, msg)
  }
  handleSuccess(res, data, msg) {
    return sendSuccess(res, data, msg)
  }
}

module.exports = BaseController