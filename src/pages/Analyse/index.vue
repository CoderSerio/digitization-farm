<script setup lang="ts">
import { ref, onMounted } from 'vue'
import InfoCard from './components/info-card.vue'
import LineChart from './components/line-chart.vue'
import DatePicker from './components/date-picker.vue'
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <InfoCard />
    </div>
    <div class="right">
      <DatePicker />
      <LineChart />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
