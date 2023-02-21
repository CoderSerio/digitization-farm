<script setup lang="ts">
import router from '@/routes'
import {GrowthStage,HealthStatus} from '@type/common'
import { getQueryPair } from '@/utils/url'
import { onMounted, reactive ,inject} from 'vue'

// const queryPair = reactive<Record<string, string>>({})

// const onBack = () => {
//   router.replace('/')
// }

// onMounted(() => {
//   const res = getQueryPair()
//   Object.keys(res).forEach((key) => {
//     queryPair[key] = res[key]
//   })
// })
// let data = reactive<Record<string, string>>({})

// onMounted(()=>{
//   data = inject('listData') || {}
//   console.log(data,'data')
// })
defineProps<{ data: {
  animal:any,
  antibiotic:any
} }>()

</script>

<template>
  <div aria-label="A complete example of page header">
    <el-descriptions class="margin-top" title="详细信息" :column="4" direction="vertical" border>
      <el-descriptions-item label="品种">{{data?.animal?.species}}</el-descriptions-item>
      <el-descriptions-item label="养殖场">{{data?.animal?.farm}}</el-descriptions-item>
      <el-descriptions-item label="将康状况" :span="2">{{ HealthStatus[data?.animal?.healthStatus] }}</el-descriptions-item>
      <el-descriptions-item label="生长状况">{{ GrowthStage[data?.animal?.growthStage]}}</el-descriptions-item>
      <el-descriptions-item label="编号">{{data?.animal?.animalId}} </el-descriptions-item>
      <el-descriptions-item label="抗生素">{{data?.antibiotic?.antibioticName}} </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
