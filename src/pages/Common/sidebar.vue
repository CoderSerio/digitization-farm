<script lang="ts" setup>
import { ref } from 'vue'

let isCollapse = ref(true)

function handleOpen(key: any, keyPath: any) {
  console.log(key, keyPath)
}
function handleClose(key: any, keyPath: any) {
  console.log(key, keyPath)
}

const toggle = () => {
  const flag = !isCollapse.value
  isCollapse.value = flag
}
</script>

<template>
  <div class="menu">
    <el-button class="toggle-btn" @click="toggle">
      <div :class="['toggle-btn-text', isCollapse ? '' : 'rotate']">></div>
    </el-button>

    <el-menu router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse">
      <el-menu-item index="2" route="/">
        <el-tooltip :disabled="!isCollapse" class="item" effect="dark" content="禽畜数据" placement="right">
          <img class="menu_icon" src="@/assets/icon_menu/a1.png" />
        </el-tooltip>
        <span>
          <RouterLink to="/">禽畜数据</RouterLink>
        </span>
      </el-menu-item>
      <!-- TODO: 完成路由 -->
      <el-menu-item index="3" route="/overview">
        <el-tooltip :disabled="!isCollapse" class="item" effect="dark" content="总览概况" placement="right">
          <img class="menu_icon" src="@/assets/icon_menu/a2.png" />
        </el-tooltip>
        <span> 总览概况 </span>
      </el-menu-item>
      <el-menu-item index="4" route="/warehouse">
        <el-tooltip :disabled="!isCollapse" class="item" effect="dark" content="仓库数据" placement="right">
          <img class="menu_icon" src="@/assets/icon_menu/a3.png" />
        </el-tooltip>
        <span>
          <RouterLink to="/warehouse" keep>仓库数据</RouterLink>
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.menu_icon {
  width: 30px;
  margin-left: 20px;
  margin-right: 20px;
}

ul {
  height: calc(100vh - 80px);
  margin: 0 !important;
}

.menu {
  position: relative;
}

.toggle-btn {
  width: 20px;
  height: 50px;
  font-weight: 800;
  position: absolute;
  right: 15px;
  top: calc(50% - 25px);
  z-index: 20;
}

.rotate {
  transform: rotate(180deg);
}
</style>
