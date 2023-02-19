<script lang="ts" setup>
import { ref } from 'vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="wrapper">
    <el-menu default-active="1" class="menu" style="height: 100%; width: 100%">
      <el-menu-item index="1">
        <template #title>
          <RouterLink to="/">禽畜数据</RouterLink>
        </template>
      </el-menu-item>

      <el-menu-item index="2">
        <template #title>
          <RouterLink to="/warehouse">仓库数据</RouterLink>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.wrapper {
  height: 95vh;
  width: calc(10vw - 20px);
  overflow: hidden;
}

.menu {
  height: 100%;
  width: 100%;
}

.el-menu-item {
  text-align: center;
}
</style>
