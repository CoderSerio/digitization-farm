import { Animal, CountItem } from '@type/common'

// 统计动物信息
export const getCntOfSpecies = (
  data: Array<Animal>
): Record<string, CountItem> => {
  const res: Record<string, CountItem> = {}
  data.forEach((item) => {
    // 统计各个物种的数量
    const target = res[item.species]
    const num = target?.num ? target.num + 1 : 1

    // 统计各个生长阶段的数量
    const growthStage = { ...target?.growthStage }
    growthStage[item.growthStage] = growthStage[item.growthStage]
      ? growthStage[item.growthStage] + 1
      : 1

    // 统计不同健康状态的数量
    const healthStatus = { ...target?.healthStatus }
    healthStatus[item.healthStatus] = healthStatus[item.healthStatus]
      ? healthStatus[item.healthStatus] + 1
      : 1

    res[item.species] = {
      num,
      growthStage,
      healthStatus
    }
  })
  console.log('动物信息总计', res)
  return res
}
