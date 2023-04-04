<script setup lang="ts">
import { reactive } from 'vue';
import DataTable from './components/data-table.vue'
import ModalForm from './components/modal-form.vue'
const modalFormData = reactive({ isShow: false })
</script>

<template>
  <DataTable :modalFormData="modalFormData" />
  <div>
    <ModalForm :data="modalFormData" />
  </div>
</template>

<style scoped></style>
