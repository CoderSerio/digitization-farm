<script setup lang="ts">
import DataTable from './components/data-table.vue'
</script>

<template>
  <div class="wrapper">
    <DataTable />
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
