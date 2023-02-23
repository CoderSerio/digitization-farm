<script setup lang="ts">
import { ref } from 'vue'
import router from '@/routes'
import { getQueryPair } from '@/utils/url'
import bus from '@/utils/eventBus'
let date = ref('')

const handleChange = (date: string) => {
  console.log(date)
  const query = getQueryPair()
  // bus.emit('dateNew',date)
  // TODO: 如果想写动态刷新数据的话，可以把下面这段改掉;不过目前这样子写的话呢，可以写很多事呢~
  location.href = `/analyse?animalId=${query?.animalId}&date=${date}`
}
</script>

<template>
  <div class="date">
    <el-date-picker
      @change="handleChange"
      v-model="date"
      type="date"
      placeholder="选择日期"
      format="YYYY-MM-DD"
      value-format="YYYYMMDD"
    >
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
