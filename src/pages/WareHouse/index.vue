<script setup lang="ts">
import { getWarehouseData } from '@/apis/getData'
import { onMounted } from 'vue'
onMounted(async () => {
  const res = await getWarehouseData()
  console.log(res)
})
</script>

<template>
  <div class="wrapper">3d部分暂时不做</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.right {
  width: 100%;
  text-align: center;
}
</style>
