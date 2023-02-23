<script setup lang="ts">
import { ref, watch } from 'vue'
import * as echarts from 'echarts'
import { strHandler } from '@/utils/strToArr'

const chartRef = ref<HTMLElement>()
let chartInstance: any = null

const colors = ['#5470C6', '#EE6666', '#EE6666']
const option = {
  title: {
    text: '当前环境数据'
  },
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['湿度', 'Precipitation', '温度']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '湿度',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: '',
      name: '',
      position: 'right',
      alignTicks: true,
      offset: 80,
      axisLine: {
        show: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: '湿度',
      type: 'bar',
      data: []
    },

    {
      name: '温度',
      type: 'line',
      yAxisIndex: 2,
      data: ['1']
    }
  ]
}

// 获取图标数据
const echatsData = defineProps<{ data: any | undefined }>()

watch(echatsData, (newValue, oldValue) => {
  const humidityListArr = strHandler(newValue.data?.humidity)
  const temperatureArr = strHandler(newValue.data?.temperature)
  option.series[0].data = humidityListArr as []
  option.series[1].data = temperatureArr as []
  // 创建图表
  chartInstance = echarts.init(chartRef.value as HTMLElement)
  chartInstance.setOption(option)
  console.log('图标刷新！！！')
})
</script>

<template>
  <div id="echart" ref="chartRef"></div>
</template>

<style scoped>
#echart {
  width: 900px;
  height: 500px;
}
</style>
