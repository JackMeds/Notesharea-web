<template>
  <HelloWorld/>
</template>
<script setup>
import { ref } from 'vue'
import HelloWorld from '../../components/headerNav.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped></style>
  