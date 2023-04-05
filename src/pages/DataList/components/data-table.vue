<script lang="ts" setup>
import { getTableListData } from '@/apis/getData'
import { computed, onMounted, ref, reactive, ComputedRef, Ref } from 'vue'
import { Animal, GrowthStage, HealthStatus, SpeciesEnum } from '@/types/common'
import router from '@/routes'

const search = ref('')
const tableData: Array<Animal> = reactive([])
let filterData: Ref<Array<Animal>> = ref([])

const { modalFormData } = defineProps<{ modalFormData: { isShow: boolean } }>()

onMounted(async () => {
  // 发起请求获取列表数据
  const res = await getTableListData()
  res?.forEach((item: Animal) => {
    tableData.push(item)
  })
  filterData.value = [...tableData]
})
// 输入搜索筛选
const handleSearch = () => {
  const tempFilterData: ComputedRef<Array<Animal>> = computed(() =>
    tableData.filter((data: Animal) => {
      const searchStr = search.value?.trim()?.toLowerCase()
      return !searchStr || data.id.toString().includes(searchStr)
    })
  )
  filterData.value = [...tempFilterData.value]
}
// 点击查看详情
const handleClick = (index: number, row: Animal) => {
  console.log(index, row?.id)
  router.push(`/analyse?id=${row.id}`)
}
// 删除
const handleDelete = (index: number, row: Animal) => {
  console.log('删除开发ing')
}
// 新增
const handleAdd = () => {
  console.log(modalFormData)
  modalFormData.isShow = true
}

</script>

<template>
  <el-card class="wrapper">
    <el-table :data="filterData" style="width: 100%; height: 100%;">
      <el-table-column label="编号" prop="id" />

      <el-table-column label="物种" prop="species">
        <template #default="scope">
          {{ SpeciesEnum[scope.row.species] }}
        </template>
      </el-table-column>

      <el-table-column label="生长周期" prop="growthStage">
        <template #default="scope">
          <el-tag :type="
            (() => {
              switch (scope.row.growthStage) {
                case 1: // 幼年
                  return 'success'
                case 2: // 成年
                  return ''
                case 3: // 老年
                  return 'warning'
              }
            })()
          " disable-transitions>{{ GrowthStage[scope.row.growthStage] }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="健康状况" prop="healthStatus">
        <template #default="scope">
          <el-tag :type="
            (() => {
              switch (scope.row.healthStatus) {
                case 0: // 异常
                  return 'danger'
                case 1: // 正常
                  return ''
                default:
                  return 'warning'
              }
            })()
          " disable-transitions>{{ HealthStatus[scope.row.healthStatus] ?? '未知' }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="饲料" prop="species">
        <template #default="scope">
          <span>{{ SpeciesEnum[scope.row.species] }}饲料</span>
        </template>
      </el-table-column>

      <el-table-column label="每日喂食量(g)" prop="feedNumber" />

      <el-table-column label="农场" prop="species">
        <template #default="scope">
          <span>{{ SpeciesEnum[scope.row.species] }}场</span>
        </template>
      </el-table-column>

      <!-- <el-table-column label="饲料" prop="feedLogId" /> -->

      <el-table-column fixed="right" align="right">
        <template #header>
          <el-button type="primary" @click="handleAdd()">新增</el-button>
          <el-input v-model="search" size="small" @input="handleSearch()" placeholder="请输入编号进行搜索" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleClick(scope.$index, scope.row)">查看详情</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style scoped>
/* .wrapper {
  height: 80vh;
  width: 90vw;
  margin: 0;
} */
.wrapper {
  width: 100%;
  margin: 15px;
  margin-top: 30px;
  display: flex;
  align-items: top;
}

.wrapper /deep/ .el-card__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
