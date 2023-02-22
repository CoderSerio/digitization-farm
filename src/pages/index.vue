<script setup lang="ts">
import { ref } from 'vue'

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
  <!-- 菜单栏 -->
  <div class="menu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button size="small" :label="false">展开</el-radio-button>
      <el-radio-button size="small" :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="2">
        <el-tooltip
          :disabled="!isCollapse"
          class="item"
          effect="dark"
          content="禽畜数据"
          placement="right"
        >
          <img class="menu_icon" src="@/assets/icon_menu/a1.png" />
        </el-tooltip>
        <span>禽畜数据</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-tooltip
          :disabled="!isCollapse"
          class="item"
          effect="dark"
          content="总览概况"
          placement="right"
        >
          <img class="menu_icon" src="@/assets/icon_menu/a2.png" />
        </el-tooltip>
        <span>总览概况</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-tooltip
          :disabled="!isCollapse"
          class="item"
          effect="dark"
          content="仓库数据"
          placement="right"
        >
          <img class="menu_icon" src="@/assets/icon_menu/a3.png" />
        </el-tooltip>
        <span>仓库数据</span>
      </el-menu-item>
    </el-menu>
  </div>
  <!-- 中心位置 -->
  <div class="center"></div>
  
</template>

<style scoped>
.head {
  height: 70px;
  widows: 100%;
  border: 1px solid black;
}
.menu {
  float: left;
  height: calc(100vh - 100px);
  /* width: 200px; */
  border: 1px solid black;
}
.center {
  float: left;
  height: calc(100vh - 100px);
  width: 80%;
  border: 1px solid black;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu_icon {
  width: 30px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
