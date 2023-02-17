<script setup lang="ts">
import Layout from '@/pages/index.vue'
import { onMounted } from 'vue'
import { getTableListData } from './apis/data-list'

// onMounted(() => {
//   console.log('启动了e')
//   getTableListData()
// })
</script>

<template>
  <Layout msg="hhhh" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
