<script lang="ts" setup>
import { ref } from 'vue'

let isCollapse = ref(true)

function handleOpen(key: any, keyPath: any) {
  console.log(key, keyPath)
}
function handleClose(key: any, keyPath: any) {
  console.log(key, keyPath)
}
</script>

<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="2">
      <img class="menu_icon" src="@/assets/icon_menu/存钱猪罐.png" />
      <span>导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <img class="menu_icon" src="@/assets/icon_menu/总览.png" />
      <i class="el-icon-document"></i>
      <span>导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <img class="menu_icon" src="@/assets/icon_menu/库存详情.png" />
      <i class="el-icon-setting"></i>
      <span>导航四</span>
    </el-menu-item>
  </el-menu>

  <!-- <div class="wrapper">
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
  </div> -->
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
