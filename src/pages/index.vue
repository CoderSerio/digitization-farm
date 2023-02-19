<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <RouterView> </RouterView>
<!-- 方便测试跳转页面, 后续会根据实际情况选择性溢出 --></template>

<style scoped></style>
