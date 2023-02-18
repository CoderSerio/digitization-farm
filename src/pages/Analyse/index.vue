<script setup lang="ts">
import { ref, onMounted } from 'vue'
import InfoCard from './components/info-card.vue'
import LineChart from './components/line-chart.vue'
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <InfoCard />
    </div>
    <LineChart />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
</style>
