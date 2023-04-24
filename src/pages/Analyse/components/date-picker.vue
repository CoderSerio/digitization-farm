<script setup lang="ts">
import { ref } from 'vue'
import router from '@/routes'
import { getQueryPair } from '@/utils/url'
// import bus from '@/utils/eventBus'
let date = ref('')

const handleChange = () => {
  console.log('??', date.value)
  const query = getQueryPair()
  location.href = `/analyse?id=${query?.id}&date=${date.value}`
}
</script>

<template>
  <div class="date">
    <el-date-picker @change="handleChange" v-model="date" type="date" placeholder="选择日期" format="YYYY-MM-DD"
      value-format="YYYYMMDD">
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
        </div>
      </template>
    </el-date-picker>
  </div>
</template>

<style scoped>
.date {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}
</style>
