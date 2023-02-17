<script setup lang="ts">
import DataList from '@page/DataList/index.vue'
import WareHouse from '@page/WareHouse/index.vue'
import Analyse from '@page/Analyse/index.vue'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>


<template>
  <RouterView>
  </RouterView>
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
}
</style>
