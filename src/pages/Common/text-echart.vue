<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const textChartRef = ref<HTMLElement>()

const props = defineProps<{
  text: string
  fontSize?: number
}>()

onMounted(async () => {
  const chartInstance = echarts.init(textChartRef.value as HTMLElement)
  chartInstance.setOption({
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: props.text,
            fontSize: props.fontSize ?? 24,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#000',
            lineWidth: 1
          },
          keyframeAnimation: {
            duration: 5000,
            loop: true,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
                percent: 0.8,
                style: {
                  fill: 'transparent'
                }
              },
              {
                percent: 1,
                style: {
                  fill: 'black'
                }
              }
            ]
          }
        }
      ]
    }
  })
})
</script>

<template>
  <div id="text-echart" ref="textChartRef">123</div>
</template>

<style scoped>
#text-echart {
  width: 100%;
  height: 100%;
}
</style>
