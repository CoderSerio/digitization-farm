<script setup lang="ts">
import { onMounted, reactive, ref, Ref } from 'vue'
import { getTableListData } from '@/apis/getData'
import { getCntOfSpecies } from '@/utils/count'
import PieChart from './components/pie-chart.vue'
import BottomInfoCard from './components/bottom-info-card.vue'
import TopInfoCard from './components/top-info-card.vue'
import { CountItem } from '@/types/common'

const cntData: Ref<Record<string, CountItem>> = ref({})
const activeSpecie = reactive({ name: '鸡' })

onMounted(async () => {
  // 分类统计
  const res = await getTableListData()
  cntData.value = getCntOfSpecies(res)
})
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <PieChart :data="cntData" :activeSpecie="activeSpecie"></PieChart>
      <TopInfoCard :data="cntData" :activeSpecie="activeSpecie"></TopInfoCard>
    </div>
    <BottomInfoCard :data="cntData" :activeSpecie="activeSpecie"></BottomInfoCard>
  </div>
</template>

<style scoped>
.wrapper {
  width: 98%;
  margin: 10px;
  margin-top: 10px;
}

.wrapper /deep/ .el-card__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.top {
  display: flex;
  align-items: center;
}
</style>
