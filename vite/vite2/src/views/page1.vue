<template>
  <div>
    page1
  </div>
  {{data.name}}
  {{data.id}}
</template>

<script setup>

import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

let data = route.query; 
</script>

<style scoped>

</style>
