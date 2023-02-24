<script lang="ts" setup></script>

<template>
  <el-card class="wrapper"> </el-card>
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
