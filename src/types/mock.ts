import { VueElement } from 'vue'

// 开发测试时用的数据
export interface User {
  id: string
  date: string
  name: string
  address: string
}

export interface Route {
  path: string
  name: string
  component: VueElement | (() => Promise<any>)
}
