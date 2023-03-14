const userRouter = require('./user')
const version = '/api/v1'

module.exports = function routerModule(app) {
  app.use(`${version}`, userRouter)

  app.use('*', (req, res) => {
    res.status(200).json({
      code: 400,
      desc: '错误的请求'
    })
  })
}