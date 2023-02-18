<template>
  <el-table :data="filterData" style="width: 100%">
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
    <el-table-column align="right">
      <template #header>
        <el-input
          v-model="search"
          size="small"
          @input="handleSearch()"
          placeholder="Type to search"
        />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleClick(scope.$index, scope.row)"
          >查看详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { getTableListData } from '@/apis/data-list'
import { computed, onMounted, ref, reactive, ComputedRef, Ref } from 'vue'
import { User } from '@type/mock'
import router from '@/routes'

const search = ref('')
const tableData: Array<any> = reactive([])
let filterData: Ref<Array<any>> = ref([])

onMounted(async () => {
  const res = await getTableListData()
  res.forEach((item: any) => {
    tableData.push(item)
  })
  filterData.value = [...tableData]
})

const handleSearch = () => {
  const tempFilterData: ComputedRef<Array<any>> = computed(() =>
    tableData.filter((data: any) => {
      const searchStr = search.value?.trim()?.toLowerCase()
      return !searchStr || data.name.toLowerCase().includes(searchStr)
    })
  )
  filterData.value = [...tempFilterData.value]
}

const handleClick = (index: number, row: User) => {
  console.log(index, row?.id)
  router.push(`/analyse?id=${row.id}`)
}
</script>
