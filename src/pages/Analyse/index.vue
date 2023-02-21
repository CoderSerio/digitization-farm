<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import InfoCard from './components/info-card.vue'
import LineChart from './components/line-chart.vue'
import DatePicker from './components/date-picker.vue'
import { getAnalyseData } from '@/apis/getData'
import { getQueryPair } from '@/utils/url'

const res = reactive<any>({})
onMounted(async () => {
  const query = getQueryPair()
  const flag = await getAnalyseData(query?.animalId, query?.date)
  Object.keys(flag).forEach(item=>{
    res[item] = flag[item]
  })
})
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <InfoCard :data="res" />
    </div>
    <div class="right">
      <DatePicker :data="res" />
      <LineChart :data="res?.farm?.humidity" />
      <LineChart :data="res?.farm?.temperature" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
