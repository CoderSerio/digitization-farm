<script setup lang="ts">
import { onMounted } from 'vue'
import { getTableListData } from '@/apis/getData'
import { getCntOfSpecies } from '@/utils/count'

onMounted(async () => {
  // 发起请求获取列表数据
  const res = await getTableListData()
  const cnt = getCntOfSpecies(res)
  console.log('统计结果', cnt)
})
</script>

<template></template>

<style scoped></style>
