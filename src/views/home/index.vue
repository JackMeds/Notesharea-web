<template>
    <div class="h-10 w-20 bg-slate-400 rounded-lg">

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
  