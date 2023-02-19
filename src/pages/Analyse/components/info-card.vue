<script setup lang="ts">
import router from '@/routes'
import { getQueryPair } from '@/utils/url'
import { onMounted, reactive } from 'vue'

const queryPair = reactive<Record<string, string>>({})

const onBack = () => {
  router.replace('/')
}

onMounted(() => {
  const res = getQueryPair()
  Object.keys(res).forEach((key) => {
    queryPair[key] = res[key]
  })
})
</script>

<template>
  <div aria-label="A complete example of page header">
    <el-page-header @back="onBack">
      <template #content>
        <div class="flex items-center">
          <span class="text-large font-600 mr-3"> 详细信息 </span>
          <span
            class="text-sm mr-2"
            style="color: var(--el-text-color-regular)"
          >
          </span>
          <el-tag> #{{ queryPair?.animalId }} </el-tag>
        </div>
      </template>

      <el-descriptions :column="3" size="small" class="mt-4">
        <el-descriptions-item label="Username"
          >kooriookami</el-descriptions-item
        >
        <el-descriptions-item label="Telephone"
          >18100000000
        </el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          海为什么是蓝色的？ 因为鱼会吐泡泡————blue blue blue~
        </el-descriptions-item>
      </el-descriptions>
    </el-page-header>
  </div>
</template>
