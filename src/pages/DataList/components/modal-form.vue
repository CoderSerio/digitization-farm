<script lang="ts" setup>
import { GrowthStage, HealthStatus } from '@/types/common';
import { ElMessage } from 'element-plus';
import { reactive, ref, Ref } from 'vue';
// 控制新增动物个体弹窗的展开和关闭
const { data } = defineProps<{ data: { isShow: boolean } }>()
const isLoading = ref(false)
const form = reactive({
  id: '',
  growth: '',
  healthStatus: '',
  species: '',
})

// 提交表单
const submitForm = async () => {
  const validate = Object.keys(form).some((key) => Boolean((form as any)[key]))
  if (!validate) {
    ElMessage({
      message: '提交失败, 请完整填写表单后重试',
      type: 'error'
    })
  }
  isLoading.value = true
  await addAnimal()
  isLoading.value = false
}

function addAnimal() {
  throw new Error('Function not implemented.');
}
</script>

<template>
  <el-dialog v-model="data.isShow" title="新增动物个体">
    <el-form :model="form">
      <el-form-item label="编号">
        <el-input v-model="form.id" autocomplete="off" placeholder="请输入物种编号" />
      </el-form-item>

      <el-form-item label="物种">
        <el-select v-model="form.species" placeholder="请选择物种">
          <el-option label="猪" value="猪" />
          <el-option label="牛" value="牛" />
          <el-option label="羊" value="羊" />
        </el-select>
      </el-form-item>

      <el-form-item label="生长阶段">
        <el-select v-model="form.growth" placeholder="请选择生长阶段">
          <el-option label="幼年" :value="GrowthStage['幼年']" />
          <el-option label="成年" :value="GrowthStage['成年']" />
          <el-option label="老年" :value="GrowthStage['老年']" />
        </el-select>
      </el-form-item>

      <el-form-item label="健康状况">
        <el-select v-model="form.healthStatus" placeholder="Please select a zone">
          <el-option label="正常" :value="HealthStatus['正常']" />
          <el-option label="异常" :value="HealthStatus['异常']" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="data.isShow = false">取消</el-button>
        <el-button @click="submitForm" type="primary">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
