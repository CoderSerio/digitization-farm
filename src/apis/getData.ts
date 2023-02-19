import request from '@/utils/request'

export const getTableListData: any = async () => {
  const res = await request.get('/data-list')
  return res
}
