<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import InfoCard from './components/info-card.vue'
import LineChart from './components/line-chart.vue'
import DatePicker from './components/date-picker.vue'
import { useRouter } from 'vue-router'
import { getAnalyseData } from '@/apis/getData'
import { getQueryPair } from '@/utils/url'
import bus from '@/utils/eventBus'

// 请求信息
const res = reactive<any>({})

// 用于路由跳转
const route = useRouter()

// 返回上一级
function goBack() {
  route.push('./')
}

// 获取子组件的传参
let date = ref('')
const query = getQueryPair()
bus.on('dateNew', (res: any) => {
  date.value = res
  // 发起请求
  getdata()
})

// 发起请求的方法
async function getdata() {
  const flag = await getAnalyseData(query?.id, date.value) ?? []
  Object.keys(flag)?.forEach((item) => {
    res[item] = flag[item]
  })
  console.log(res, 'res')
}

// 首次加载请求数据
onMounted(async () => {
  getdata()
})
</script>

<template>
  <el-card class="wrapper">
    <!-- 顶部区域 -->
    <div class="top">
      <!-- 返回按钮 -->
      <img @click="goBack" class="backBtn" src="@/assets/icon_analyse/a4.png" />
      <div>{{ date }}</div>
      <!-- 日期选择 -->
      <DatePicker :data="res" />
    </div>
    <!-- 左侧数据区 -->
    <div class="left">
      <InfoCard :data="res" />
    </div>
    <!-- 右侧图表区 -->
    <div class="right">
      <LineChart :data="res?.farm" />
    </div>
  </el-card>
</template>

<style scoped>
.wrapper {
  width: 100%;
  margin: 15px;
  margin-top: 30px;
}

.wrapper /deep/ .el-card__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* 顶部区域 */
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* 返回按钮 */
.backBtn,
.backBtn :hover {
  width: 30px;
  cursor: pointer;
}
</style>
