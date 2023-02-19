<script setup lang="ts">
import DataTable from './components/data-table.vue'
import Sidebar from '../common/sidebar.vue'
</script>

<template>
  <div class="wrapper">
    <div class="left">
      <Sidebar />
    </div>
    <div class="right">
      <DataTable />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  min-width: 80px;
  justify-content: space-between;
  align-items: center;
}
</style>
