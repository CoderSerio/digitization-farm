import request from '@/utils/request'

// 如果后面有时间的话，再考虑把any替换掉吧

// 获取所有生物的列表数据
export const getTableListData: any = async () => {
  const res = await request.get('/data-list')
  return res.data
}

// 获取具体某一个生物个体，在某一天的日志信息
// 日期不传默认为今天, 日期字符串格式化为 yyyymmdd 的形式
export const getAnalyseData: any = async (
  animalId: string,
  date: string = ''
) => {
  if (!animalId) {
    throw Error('getAnalyseData方法缺少必要参数id')
  }
  const res = await request.get('/analyse', { animalId, date })
  return res.data
}

export const getWarehouseData: any = async () => {
  const res = await request.get('/warehouse')
  return res.data
}
