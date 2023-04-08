<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { getTableListData } from '@/apis/getData'
import { getCntOfSpecies } from '@/utils/count'
import PieChart from './components/pie-chart.vue'
import BottomInfoCard from './components/bottom-info-card.vue'
import TopInfoCard from './components/top-info-card.vue'
import { CountItem } from '@/types/common'

const cntData: Ref<Record<string, CountItem>> = ref({})

onMounted(async () => {
  // 分类统计
  const res = await getTableListData()
  cntData.value = getCntOfSpecies(res)
})
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <PieChart :data="cntData"></PieChart>
      <TopInfoCard></TopInfoCard>
    </div>
    <BottomInfoCard></BottomInfoCard>
  </div>
</template>

<style scoped>
.wrapper {
  width: 98%;
  margin: 15px;
  margin-top: 30px;
}

.wrapper /deep/ .el-card__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.top {
  display: flex;
}
</style>
