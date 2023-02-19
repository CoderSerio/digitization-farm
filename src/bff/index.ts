import express from 'express'

// mock数据，和后端对接后移除
import mockDataList from './mock/data-list.json'
import mockAnalyse from './mock/analyse.json'

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

// 获取列表数据
app.get('/data-list', (req, res) => {
  console.log('正在查询列表数据...', req.url)
  // mock数据，和后端完成对接后移除
  res.send(mockDataList)
})

app.get('/analyse', (req, res) => {
  console.log('正在生物详细信息...', req.url)
  // mock数据，和后端对接后移除
  res.send(mockAnalyse)
})

app.listen(PORT, () => {
  console.log(`聚合层已在端口${PORT}启动`)
})
