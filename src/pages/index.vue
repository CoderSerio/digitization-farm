<script setup lang="ts">
import Sidebar from '@page/Common/sidebar.vue'
import TextEchart from '@page/Common/text-echart.vue'

defineProps<{ msg: string }>()
</script>

<template>
  <!-- 头部 -->
  <div class="head">
    <div style="width: 200px; height: 100%">
      <TextEchart text="数字化农场" />
    </div>
  </div>
  <div class="body">
    <!-- 菜单栏 -->
    <Sidebar />
    <!-- 中心位置 -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.head {
  height: 70px;
  widows: 100%;
  background-color: #409eff;
}
.body {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
</style>
