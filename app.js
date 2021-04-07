const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./routes/index')


// 解析json格式的body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 监听路由
Router(app)

app.listen(59413, () => {
  console.log(`Your server is running at http://127.0.0.1:59413`)
})