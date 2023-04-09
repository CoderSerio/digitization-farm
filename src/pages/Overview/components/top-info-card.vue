<script lang="ts" setup>
import { CountItem } from '@/types/common';

const props = defineProps<{
  data: Record<string, CountItem>,
  activeSpecie: { name: string }
}>()
</script>

<template>
  <el-card class="wrapper">
    <div>{{ props.activeSpecie.name }}</div>
    <div>{{ props.data }}</div>
  </el-card>
</template>

<style scoped>
.wrapper {
  flex: 1;
  height: 320px;
  margin: 15px;
}

.wrapper /deep/ .el-card__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
