import express from 'express'
const request = require('request')

// mock数据，和后端对接后移除
import mockDataList from './mock/data-list.json'
import mockAnalyse from './mock/analyse.json'
import { getQuery, getQueryPair } from './utils'

// 配置聚合层（不要改动，如果无法启动请检查3000端口是否被占用）
const app = express()
const BFF_PORT = 3000

// TODO: 配置后端的地址和端口，这里需要根据实际情况进行改动
const BE_URL = 'http://43.139.80.148:8080'
const BE_URL2 = 'http://43.139.80.148:8081'

// 不走mock就改一下这个
const isMock = false

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 测试
app.get('/', (req, res) => {
  res.send('Hello world')
})

// 查看数据列表
app.get('/data-list', (req, res) => {
  console.log(`\n${new Date()}, 接收到请求:${req.url}`)
  console.log('响应体:\n', req.body)
  const querys = req.url.split('?')?.[1] ?? ''
  // 真实数据，与后端对接时使用
  if (isMock) {
    // mock数据，本地开发自测时使用
    res.send(mockDataList)
  } else {
    request(
      {
        url: `${BE_URL}/notes/all?${querys}`,
        method: 'POST'
      },
      (error: any, response: any, body: any) => {
        if (error) {
          throw error
        } else {
          console.log('响应体:\n', body)
          res.send(body)
        }
      }
    )
  }
})

// 查看数据分析
app.get('/analyse', (req, res) => {
  console.log(`\n${new Date()}, 接收到请求:${req.url}`)
  console.log('响应体:\n', req.body)
  // const querys = req.url.split('?')?.[1] ?? ''
  const queryPairs = getQueryPair(req.url)
  const querys = getQuery({
    ...queryPairs,
    animalId: queryPairs?.id
  })
  // 真实数据，与后端对接时使用
  if (isMock) {
    // mock数据，本地开发自测时使用
    res.send(mockAnalyse)
  } else {
    request(
      {
        // 参考后端的url格式 'localhost:8088/'
        url: `${BE_URL2}/selectDetail?${querys}`,
        method: 'POST'
      },
      (error: any, response: any, body: any) => {
        if (error) {
          throw error
        } else {
          console.log('响应体:\n', body)
          res.send(body)
        }
      }
    )
  }
})

// 查询仓库数据
app.get('/warehouse', (req, res) => {
  console.log(`\n${new Date()}, 接收到请求:${req.url}`)
  console.log('响应体:\n', req.body)
  const querys = req.url.split('?')?.[1] ?? ''
  // 真实数据，与后端对接时使用
  if (isMock) {
    res.send('暂时还没开发3d的部分')
  } else {
    request(
      {
        url: `${BE_URL}/selectStock?${querys}`,
        method: 'POST'
      },
      (error: any, response: any, body: any) => {
        if (error) {
          throw error
        } else {
          console.log('响应体:\n', body)
          res.send(body)
        }
      }
    )
  }
})

// 添加动物个体
app.get('/add', (req, res) => {
  console.log(`\n${new Date()}, 接收到请求:${req.url}`)
  console.log('响应体:\n', req.body)
  const querys = req.url.split('?')?.[1] ?? ''
  // 真实数据，与后端对接时使用
  if (isMock) {
    res.send('暂无mock数据')
  } else {
    request(
      {
        url: `${BE_URL}/notes/add?${querys}`,
        method: 'POST'
      },
      (error: any, response: any, body: any) => {
        if (error) {
          throw error
        } else {
          console.log('响应体:\n', body)
          res.send(body)
        }
      }
    )
  }
})

// 删除动物个体
app.get('/delete', (req, res) => {
  console.log(`\n${new Date()}, 接收到请求:${req.url}`)
  console.log('响应体:\n', req.body)
  const querys = req.url.split('?')?.[1] ?? ''
  // 真实数据，与后端对接时使用
  if (isMock) {
    res.send('暂时还没开发3d的部分')
  } else {
    request(
      {
        url: `${BE_URL}/notes/delete?${querys}`,
        method: 'POST'
      },
      (error: any, response: any, body: any) => {
        if (error) {
          throw error
        } else {
          console.log('响应体:\n', body)
          res.send(body)
        }
      }
    )
  }
})

app.listen(BFF_PORT, () => {
  console.log(`聚合层已在端口${BFF_PORT}启动`)
})
