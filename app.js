const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./routes/index')


// 解析json格式的body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))
// 监听路由
Router(app)

app.listen(59413, () => {
  console.log(`Your server is running at http://127.0.0.1:59413`)
})