<script setup lang="ts">
import { GrowthStage, HealthStatus } from '@type/common'
import { watch } from 'vue'

// 这里是let
defineProps<{
  data: {
    animal: any
    antibiotic: any
  }
}>()
</script>

<template>
  <div
    aria-label="A complete example of page header"
    style="margin-top: 30px; width: 300px"
  >
    <el-descriptions class="margin-top" :column="3" direction="vertical" border>
      <el-descriptions-item label="编号"
        >{{ data?.animal?.animalId }}
      </el-descriptions-item>
      <el-descriptions-item label="品种">{{
        data?.animal?.species
      }}</el-descriptions-item>
      <el-descriptions-item label="养殖场">{{
        data?.animal?.farm
      }}</el-descriptions-item>
      <el-descriptions-item label="将康状况">{{
        HealthStatus[data?.animal?.healthStatus]
      }}</el-descriptions-item>
      <el-descriptions-item label="生长状况">{{
        GrowthStage[data?.animal?.growthStage]
      }}</el-descriptions-item>
      <el-descriptions-item label="抗生素"
        >{{ data?.antibiotic?.antibioticName }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
