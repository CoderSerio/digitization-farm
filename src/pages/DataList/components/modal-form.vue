<script lang="ts" setup>
import { addAnimal } from '@/apis/getData';
import { AddingFormData, GrowthStage, HealthStatus, SpeciesEnum } from '@/types/common';
import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
// 控制新增动物个体弹窗的展开和关闭
const { data } = defineProps<{ data: { isShow: boolean } }>()
// const isLoading = ref(false)
const form = reactive<AddingFormData>({})

// 表单校验函数
const validator = () => {
  const isFilled = Object.keys(form).every((key) => {
    const value = (form as any)[key]
    return value === 0 ? true : Boolean(value)
  })
  return isFilled
}

// 提交表单
const submitForm = async () => {
  const validate = validator()
  if (!validate) {
    ElMessage({
      message: '提交失败, 请完整填写表单后重试',
      type: 'error'
    })
    return
  }
  const { species, healthStatus, growth, feedNumber } = form
  try {
    // @ts-ignore 此处能够保证一定有值
    await addAnimal(species, healthStatus, growth, feedNumber)
  } catch (error) {
    ElMessage({
      message: '提交失败, 网络异常',
      type: 'error'
    })
  } finally {
    data.isShow = false
  }
  location.reload()
}
</script>

<template>
  <el-dialog v-model="data.isShow" title="新增动物个体">
    <el-form :model="form">

      <el-form-item label="物种">
        <el-select v-model="form.species" placeholder="请选择物种">
          <el-option label="猪" :value="SpeciesEnum['猪']" />
          <el-option label="羊" :value="SpeciesEnum['羊']" />
          <el-option label="鸡" :value="SpeciesEnum['鸡']" />
        </el-select>
      </el-form-item>

      <el-form-item label="生长阶段">
        <el-select v-model="form.growth" placeholder="请选择生长阶段">
          <el-option label="幼年" :value="GrowthStage['幼年']" />
          <el-option label="成年" :value="GrowthStage['成年']" />
          <el-option label="老年" :value="GrowthStage['老年']" />
        </el-select>
      </el-form-item>

      <el-form-item label="每日进食量(g)">
        <el-input v-model="form.feedNumber" placeholder="请输入每日进食量" />
      </el-form-item>


      <el-form-item label="健康状况">
        <el-select v-model="form.healthStatus" placeholder="请选择健康状况">
          <el-option label="正常" :value="HealthStatus['正常']" />
          <el-option label="异常" :value="HealthStatus['异常']" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="data.isShow = false">取消</el-button>
        <el-button @click="submitForm()" type="primary">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped></style>
