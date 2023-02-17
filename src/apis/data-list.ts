import request from '@/utils/request'

export const getTableListData: any = async () => {
  const res = await request.get('/mock/data-list')
  return res
}
