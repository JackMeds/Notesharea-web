<template>
    <div class="header h-10 bg-blue-500">

    </div>
</template>
  <script setup>
  import { ref } from 'vue'
  
  defineProps({
    msg: String,
  })
  
  const count = ref(0)
  </script>
  <style scoped>
  </style>
  