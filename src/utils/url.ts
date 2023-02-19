// 获取url参数并处理为键值对
interface QueryPair {
  [key: string]: string
}

// 这个可以抽离，发布成npm包
export const getQueryPair = (): QueryPair => {
  const url = location.href
  const querys = url.split('?')?.[1] ?? ''
  const queryArr = querys.split('&') ?? []
  const queryPair: QueryPair = {}
  queryArr.forEach((kv) => {
    const defaultKey = Symbol('') // 防止key为空导致运行报错
    const [k = defaultKey, v = ''] = kv.split('=')
    queryPair[k as string] = v
  })
  return queryPair
}
