
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./routes/index')
const cors = require('cors')
const helmet = require('helmet')


// 解析json格式的body
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))
// 监听路由
Router(app)

const port = process.env.Port || '9413'
app.listen(port, () => {
  console.log(`Your server is running at http://127.0.0.1:${port}`)
})