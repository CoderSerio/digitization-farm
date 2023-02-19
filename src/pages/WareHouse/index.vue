<script setup lang="ts">
import Sidebar from '@page/Common/sidebar.vue'
console.log('hello world')
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <Sidebar />
    </div>
    <div class="right">
      3d部分暂时不做
    </div>
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
