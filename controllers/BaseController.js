class BaseController {
  constructor(res) {
    this.res = res
    this.results = {
      code: 200,
      data: null,
      desc: '操作成功',
    }
  }

  // 操作错误
  handleError(code, msg) {
    this.results.code = code || 400,
    this.results.desc = msg || '操作失败！'
    return this.results
  }
  handleSuccess(data) {
    this.results.code = 200
    this.results.desc = '操作成功'
    this.results.data = data
    return this.results
  }
}

module.exports = BaseController