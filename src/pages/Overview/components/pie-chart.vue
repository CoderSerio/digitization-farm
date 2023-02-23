<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref<HTMLElement>()
let chartInstance: any = null

// 获取图标数据
// const echatsData = defineProps<{ data: string | undefined }>()

// watch(echatsData, (newValue) => {
// 创建图表
onMounted(async () => {
  chartInstance = echarts.init(chartRef.value as HTMLElement)
  chartInstance.setOption({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  })
})
// })
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
