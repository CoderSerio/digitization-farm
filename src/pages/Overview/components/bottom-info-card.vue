<script lang="ts" setup>
import { CountItem, SpeciesEnum } from '@/types/common';
import { watch, ref } from 'vue';
import * as echarts from 'echarts'

const chartRef1 = ref<HTMLElement>()
const props = defineProps<{
  data: Record<string, CountItem>,
  activeSpecie: { name: string }
}>()

const option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 },
    { type: 'category', gridIndex: 1 }
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  grid: [{ bottom: '55%' }, { top: '55%' }],
  series: [
    // These series are in the first grid.
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    // These series are in the second grid.
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
    { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
  ]
}

watch(props, () => {
  const target = props?.data[SpeciesEnum[props.activeSpecie.name as any]]
  // 生长周期分布
  const chartInstance1 = echarts.init(chartRef1.value as HTMLElement)
  chartInstance1.setOption(option)
})

</script>

<template>
  <el-card class="wrapper">
    <!-- <div>{{ props.data[SpeciesEnum[props.activeSpecie.name as any]] }}</div> -->
    <div id="echart1" ref="chartRef1"></div>
  </el-card>
</template>

<style scoped>
.wrapper {
  height: calc(95% - 280px);
}

.wrapper /deep/ .el-card__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#echart1,
#echart2 {
  width: 300px;
  height: 260px;
}
</style>
