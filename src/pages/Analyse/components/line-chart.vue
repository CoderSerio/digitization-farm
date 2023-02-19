<script setup lang="ts">
import { onMounted, ref, toRefs, watch } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLElement>()
let chartInstance: any = null

onMounted(() => {
  // 创建图表
  chartInstance = echarts.init(chartRef.value as HTMLElement)
  chartInstance.setOption({
    xAxis: {
      type: 'category',
      data: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月'
      ]
    },
    tooltip: {
      trigger: 'axis'
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
        type: 'line',
        smooth: true
      }
    ]
  })
})

// 更新图表
// watch(
//   option,
//   () => {
//     chartInstance?.setOption(props.option)
//   },
//   {
//     deep: true
//   }
// )
</script>

<template>
  <div id="echart" ref="chartRef"></div>
</template>

<style scoped>
#echart {
  width: 750px;
  height: 200px;
}
</style>
