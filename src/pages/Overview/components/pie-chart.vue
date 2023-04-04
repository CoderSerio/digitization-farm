<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'
import { CountItem } from '@/types/common'

const chartRef = ref<HTMLElement>()
let chartInstance: any = null

// 获取图标数据
const props = defineProps<{ data: Record<string, CountItem> }>()

watch(props, (newValue, oldValue) => {
  console.log(props)
  chartInstance = echarts.init(chartRef.value as HTMLElement)
  chartInstance.on('click', (value: any, a: any) => {
    console.log(value, a)
  })
  chartInstance.setOption({
    title: {
      show: true
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: '物种统计',
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
        data: Object.keys(props.data ?? [])?.map((key) => {
          return {
            name: key,
            value: props.data[key].num
          }
        })
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
  width: 350px;
  height: 350px;
}
</style>
