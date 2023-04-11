<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'
import { CountItem, SpeciesEnum } from '@/types/common'

const chartRef = ref<HTMLElement>()
let chartInstance: any = null

// 获取图标数据
const props = defineProps<{
  data: Record<string, CountItem>,
  activeSpecie: { name: string }
}>()

watch(props, (newValue, oldValue) => {
  chartInstance = echarts.init(chartRef.value as HTMLElement)
  chartInstance.on('click', (value: any) => {
    // 获取当前点击的是动物名称
    props.activeSpecie.name = value?.name
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
            name: SpeciesEnum[+key],
            value: props.data[key].num
          }
        })
      }
    ]
  })
})
</script>

<template>
  <div class="wrapper">
    <div id="echart" ref="chartRef"></div>
    <div>{{ props.activeSpecie.name }}</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
}

#echart {
  width: 350px;
  height: 35vh;
}
</style>
