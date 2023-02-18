<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <RouterView> </RouterView>
  <!-- 方便测试跳转页面, 后续会根据实际情况选择性溢出 -->
  <div class="links">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/analyse">数据详情</RouterLink>
    <RouterLink to="/warehouse">仓库</RouterLink>
  </div>
</template>

<style scoped>
.links {
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #106bf4;
  padding: 10px;
  z-index: 100;
  color: #fff;
}
</style>
