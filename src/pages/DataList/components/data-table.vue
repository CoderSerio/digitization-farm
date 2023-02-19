<script lang="ts" setup>
import { getTableListData } from '@/apis/getData'
import { computed, onMounted, ref, reactive, ComputedRef, Ref } from 'vue'
import { Animal, GrowthStage, HealthStatus } from '@/types/common'
import router from '@/routes'

const search = ref('')
const tableData: Array<Animal> = reactive([])
let filterData: Ref<Array<Animal>> = ref([])

onMounted(async () => {
  // 发起请求获取列表数据
  const res = await getTableListData()
  res.forEach((item: Animal) => {
    tableData.push(item)
  })
  filterData.value = [...tableData]
})

const handleSearch = () => {
  const tempFilterData: ComputedRef<Array<Animal>> = computed(() =>
    tableData.filter((data: Animal) => {
      const searchStr = search.value?.trim()?.toLowerCase()
      return !searchStr || data.animalId.toString().includes(searchStr)
    })
  )
  filterData.value = [...tempFilterData.value]
}

const handleClick = (index: number, row: Animal) => {
  console.log(index, row?.animalId)
  router.push(`/analyse?id=${row.animalId}`)
}

// 处理物种筛选
const handleSpecies = (value: string, row: Animal) => {
  return row.species === value
}

// 处理生长周期筛选
const handleGrowthStageFilter = (value: GrowthStage, row: Animal) => {
  return row.growthStage === value
}

// 处理健康状况筛选
const handleHealthStatusFilter = (value: HealthStatus, row: Animal) => {
  return row.healthStatus === value
}

</script>

<template>
  <div class="wrapper">
    <el-table :data="filterData" style="width: 100%; height: 100%;">

      <el-table-column label="编号" prop="animalId" />

      <el-table-column label="物种" prop="species" :filters="[
        { text: '猪', value: '猪' },
        { text: '鸡', value: '鸡' },
        { text: '羊', value: '羊' }
      ]" :filter-method="handleSpecies">

      </el-table-column>

      <el-table-column label="生长周期" prop="growthStage" :filters="[
        { text: '幼年', value: 1 },
        { text: '成年', value: 2 },
        { text: '老年', value: 3 },
      ]" :filter-method="handleGrowthStageFilter">
        <template #default="scope">
          <el-tag :type="success" disable-transitions>{{ GrowthStage[scope.row.growthStage] }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="健康状况" prop="healthStatus" :filters="[
        { text: '正常', value: 1 },
        { text: '异常', value: 0 },
      ]" :filter-method="handleHealthStatusFilter">
        <template #default="scope">
          <el-tag :type="success" disable-transitions>{{ HealthStatus[scope.row.healthStatus] }}</el-tag>
        </template>
      </el-table-column>

      <!-- <el-table-column label="养殖场" prop="farm" /> -->

      <!-- <el-table-column label="饲料" prop="feedLogId" /> -->

      <el-table-column fixed="right" align="right">
        <template #header>
          <el-input v-model="search" size="small" @input="handleSearch()" placeholder="请输入编号进行搜索" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleClick(scope.$index, scope.row)">查看详情</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<style scoped>
.wrapper {
  height: 90vh;
  width: 100vw;
  margin: 0;
}
</style>
