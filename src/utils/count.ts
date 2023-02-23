import { Animal, CountItem } from '@type/common'

export const getCntOfSpecies = (
  data: Array<Animal>
): Record<string, CountItem> => {
  const res: Record<string, CountItem> = {}
  data.forEach((item) => {
    const target = res[item.species]
    const num = target?.num ? target.num + 1 : 1

    const growthStage = { ...target?.growthStage }
    growthStage[item.growthStage] = growthStage[item.growthStage]
      ? growthStage[item.growthStage] + 1
      : 1

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
  console.log(res)
  return res
}
