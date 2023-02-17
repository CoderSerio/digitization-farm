<script setup lang="ts">
import { getTableListData } from '@/apis/data-list'
import { table } from 'console'
import { onMounted, reactive } from 'vue'
const tableData = reactive([])

const handleClick = (e: Event) => {
  location.href = `${location.href}/analyse?id=111`
}

onMounted(async () => {
  const res: Array<any> = await getTableListData()
  res?.forEach((item) => {
    tableData.push(item)
  })
})
</script>

<template>
  <div class="wrapper">
    <el-table :data="tableData" style="width: 100%; height: 100%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid #e3e3e3;
}
</style>
