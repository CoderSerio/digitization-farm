<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'
import { strHandler } from '@/utils/strToArr'

const chartRef = ref<HTMLElement>()
let chartInstance: any = null

// 获取图标数据
const echatsData = defineProps<{ data: string | undefined }>()

watch(echatsData, (newValue) => {
  const humidityListArr = strHandler(newValue.data)
  // 创建图表
  chartInstance = echarts.init(chartRef.value as HTMLElement)
  chartInstance.setOption({
    xAxis: {
      type: 'category',
      data: Array(24)
        .fill(0)
        .map((_, index) => index + 1)
    },
    tooltip: {
      trigger: 'axis'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: humidityListArr,
        type: 'line',
        smooth: true
      }
    ]
  })
})
</script>

<template>
  <div id="echart" ref="chartRef"></div>
</template>

<style scoped>
#echart {
  width: 750px;
  height: 300px;
}
</style>
