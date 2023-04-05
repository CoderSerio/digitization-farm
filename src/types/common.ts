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

export type Species = '猪' | '羊' | '鸡'
export enum SpeciesEnum {
  '猪' = 1,
  '羊' = 2,
  '鸡' = 3
}

export interface Animal {
  id: number
  species: Species
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

// 统计，一个物种的数量、健康分布、生长周期分布
export interface CountItem {
  num: number
  growthStage: Record<string, number>
  healthStatus: Record<string, number>
}
