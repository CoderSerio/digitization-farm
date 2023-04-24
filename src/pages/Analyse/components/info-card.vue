<script setup lang="ts">
import { getQueryPair } from '@/utils/url'
import { GrowthStage, HealthStatus, SpeciesEnum } from '@type/common'

defineProps<{
  data: {
    animal: any
    antibiotic: any
  }
}>()

const getAvatar = (species: number) => {
  switch (+species) {
    case +SpeciesEnum['猪']:
      return 'src/assets/avatars/pig.jpg'
    case +SpeciesEnum['鸡']:
      return 'src/assets/avatars/chicken.jpg'
    case +SpeciesEnum['羊']:
      return 'src/assets/avatars/sheep.jpg'

    default:
      return 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
  }
}

</script>

<template>
  <div style="margin-top: 30px; width: 300px; text-align: center;">
    <el-avatar :size="200" src="https://empty">
      <img :src="getAvatar(data?.animal?.species)" />
    </el-avatar>
    <div style="margin: 24px 0;"></div>
    <el-descriptions class="margin-top" :column="2" border>
      <el-descriptions-item label="编号">
        {{ getQueryPair().id ?? '--' }}
      </el-descriptions-item>
      <el-descriptions-item label="品种">
        {{ SpeciesEnum[data?.animal?.species] }}
      </el-descriptions-item>
      <el-descriptions-item label="养殖场">
        养{{ SpeciesEnum[data?.animal?.species] }}场
      </el-descriptions-item>
      <el-descriptions-item label="将康状况">
        {{ HealthStatus[data?.animal?.healthStatus] }}
      </el-descriptions-item>
      <el-descriptions-item label="生长状况">
        {{ GrowthStage[data?.animal?.growthStage] }}
      </el-descriptions-item>
      <el-descriptions-item label="饲料">
        {{ SpeciesEnum[data?.animal?.species] }}饲料
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
