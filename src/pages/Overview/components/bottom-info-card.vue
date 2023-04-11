<script lang="ts" setup>
import { CountItem, GrowthStage, SpeciesEnum } from '@/types/common';
import { watch, ref } from 'vue';
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLElement>()
const props = defineProps<{
  data: Record<string, CountItem>,
  activeSpecie: { name: string }
}>()

const getOption = (source: Array<Array<string | number>>) => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {},
    title: {
      text: '各物种生长周期分布'
    },
    dataset: {
      source,
    },
    xAxis: [
      { type: 'category', gridIndex: 0 },
    ],
    yAxis: [{ gridIndex: 0 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
    ]
  }
  return option
}

watch(props, () => {
  const target = props?.data[SpeciesEnum[props.activeSpecie.name as any]]
  const source1 = [
    ['生长周期分布', GrowthStage[1], GrowthStage[2], GrowthStage[3]],
    ['猪', props.data?.[1]?.growthStage?.[1] || 0, props.data?.[1]?.growthStage?.[2] || 0, props.data?.[1]?.growthStage?.[3] || 0],
    ['羊', props.data?.[2]?.growthStage?.[1] || 0, props.data?.[2]?.growthStage?.[2] || 0, props.data?.[2]?.growthStage?.[3] || 0],
    ['鸡', props.data?.[3]?.growthStage?.[1] || 0, props.data?.[3]?.growthStage?.[2] || 0, props.data?.[3]?.growthStage?.[3] || 0,],
  ]
  // 生长周期分布
  const chartInstance1 = echarts.init(chartRef1.value as HTMLElement)
  chartInstance1.setOption(getOption(source1))
})

</script>

<template>
  <el-card class="wrapper">
    <div id="echart1" ref="chartRef1"></div>
  </el-card>
</template>

<style scoped>
.wrapper {
  height: 350px;
  text-align: left;
}

#echart1,
#echart2 {
  width: 600px;
  height: 600px;
}
</style>
