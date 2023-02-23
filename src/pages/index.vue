<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from '@page/Common/sidebar.vue'
import DataList from '@page/DataList/index.vue'

let isCollapse = ref(false)

function handleOpen(key: any, keyPath: any) {
  console.log(key, keyPath)
}
function handleClose(key: any, keyPath: any) {
  console.log(key, keyPath)
}
defineProps<{ msg: string }>()
</script>

<template>
  <!-- <RouterView> </RouterView> -->
  <!-- 方便测试跳转页面, 后续会根据实际情况选择性溢出 -->

  <!-- 头部 -->
  <div class="head"></div>
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
