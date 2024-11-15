<template>
    <div :class="alertClass" role="alert">
      <span>{{ message }}</span>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'success', 
    },
    message: {
      type: String,
      required: true,
    }
  });
  
  const alertClass = computed(() => {
    const baseClass = 'p-4 rounded-md mb-4';
    switch (props.type) {
      case 'success':
        return `${baseClass} bg-green-100 text-green-700`;
      case 'error':
        return `${baseClass} bg-red-100 text-red-700`;
      default:
        return `${baseClass} bg-gray-100 text-gray-700`;
    }
  });
  </script>
  
  <style scoped>
  .alert {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  