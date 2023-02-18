import express from 'express'
import mockDataList from './mock/data-list.json'

//中间层
const app = express()
const PORT = 3000

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/data-list', (req, res) => {
  console.log('受到了请求', req.url)
  res.send(mockDataList)
})

app.listen(PORT, () => {
  console.log(`聚合层已在端口${PORT}启动`)
})
