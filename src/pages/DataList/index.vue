<script setup lang="ts">
import DataTable from './components/data-table.vue'
import Sidebar from './components/sidebar.vue'
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
  justify-content: center;
  align-items: center;
}
</style>
