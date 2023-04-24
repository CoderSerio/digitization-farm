import { Animal, GrowthStage, HealthStatus, SpeciesEnum } from '@/types/common'
import request from '@/utils/request'
import { number } from 'echarts'

// 如果后面有时间的话，再考虑把any替换掉吧

// 获取所有生物的列表数据
export const getTableListData: any = async () => {
  const res = await request.get('/data-list')
  return res.data
}

// 获取具体某一个生物个体，在某一天的日志信息
// 日期不传默认为今天, 日期字符串格式化为 yyyymmdd 的形式
export const getAnalyseData: any = async (id: string, date: string = '') => {
  if (!id) {
    throw Error('getAnalyseData方法缺少必要参数id')
  }
  const res = await request.get('/analyse', { id, date })
  return res?.data
}

// 获得仓库信息（3D模型部分）
export const getWarehouseData: any = async () => {
  const res = await request.get('/warehouse')
  return res.data
}
// 删除动物
export const deleteAnimal = async (id: string | number) => {
  if (!id) {
    throw Error('getAnalyseData方法缺少必要参数id')
  }
  const res = await request.get('/delete', { id })
  return res.data
}

// 添加动物
export const addAnimal = async (
  species: keyof SpeciesEnum,
  healthStatus: HealthStatus,
  growth: GrowthStage,
  feedNumber: number
) => {
  const res = await request.get('/add', {
    farm: '0', // 冗余参数，不用理会
    feed_log_id: '1', // 同上
    feed_number: feedNumber,
    growth,
    healthStatus,
    species
  })
  return res.data
}
