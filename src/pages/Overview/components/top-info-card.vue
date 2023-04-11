<script lang="ts" setup>
import { CountItem, GrowthStage, HealthStatus, SpeciesEnum } from '@/types/common';
import * as echarts from 'echarts'
import { ref, watch } from 'vue';

const chartRef1 = ref<HTMLElement>()
const chartRef2 = ref<HTMLElement>()
const props = defineProps<{
  data: Record<string, CountItem>,
  activeSpecie: { name: string }
}>()

// 产生配置
const getOption = (title: string, data: Array<Record<string, any>>) => {
  return {
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
}

watch(props, () => {
  const target = props?.data[SpeciesEnum[props.activeSpecie.name as any]]
  // 生长周期分布
  const chartInstance1 = echarts.init(chartRef1.value as HTMLElement)
  // 健康状况分布
  const chartInstance2 = echarts.init(chartRef2.value as HTMLElement)
  const data1 = Object.keys(target?.growthStage).map((key) => {
    return {
      name: GrowthStage[key as any],
      value: target.growthStage[key]
    }
  })
  const data2 = Object.keys(target?.healthStatus).map((key) => {
    return {
      name: HealthStatus[key as any],
      value: target.healthStatus[key]
    }
  })

  chartInstance1.setOption(getOption('生长周期分布', data1))
  chartInstance2.setOption(getOption('健康状况分布', data2))
})
</script>

<template>
  <el-card class="wrapper">
    <!-- <div>{{ props.activeSpecie.name }}</div>
                                                                                                  <div>{{ props.data }}</div> -->
    <div id="echart1" ref="chartRef1"></div>
    <div id="echart2" ref="chartRef2"></div>
  </el-card>
</template>

<style scoped>
.wrapper {
  flex: 1;
  height: 240px;
  width: 100%;
}

.wrapper /deep/ .el-card__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

#echart1,
#echart2 {
  width: 300px;
  height: 240px;
}
</style>
