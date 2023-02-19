<script setup lang="ts">
import { ref } from 'vue'
const date = ref('')
</script>

<template>
  <div class="date">
    <el-date-picker v-model="date" type="dates" placeholder="点击选择日期" />
    <span>{{ date }}</span>
  </div>
</template>

<style scoped>
.date {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}
</style>
