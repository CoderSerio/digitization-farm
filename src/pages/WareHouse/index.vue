<script setup lang="ts">
import { getWarehouseData } from '@/apis/getData'
import Sidebar from '@page/Common/sidebar.vue'
import { onMounted } from 'vue'
onMounted(async () => {
  const res = await getWarehouseData()
  console.log(res)
})
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <Sidebar />
    </div>
    <div class="right">3d部分暂时不做</div>
  </div>
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
