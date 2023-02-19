import { VueElement } from 'vue'

export enum GrowthStage {
  '幼年' = 1,
  '成年' = 2,
  '老年' = 3
}

export enum HealthStatus {
  '正常' = 1,
  '异常' = 0
}

export interface Animal {
  animalId: number
  species: '猪' | '羊' | '鸡'
  growthStage: GrowthStage
  healthStatus: HealthStatus
  farm: string
  feedLogId: number
}

export interface Route {
  path: string
  name: string
  component: VueElement | (() => Promise<any>)
}
