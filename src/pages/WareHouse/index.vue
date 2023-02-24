<script setup lang="ts">
import { getWarehouseData } from '@/apis/getData'
import { onMounted } from 'vue'
import Demo from './components/3d-demo.vue'

onMounted(async () => {
  const res = await getWarehouseData()
  console.log(res)
})
</script>

<template>
  <div class="wrapper">
    <Demo></Demo>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
