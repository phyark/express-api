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