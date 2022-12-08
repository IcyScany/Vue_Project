<template>
  <div>
    {{count}}
  </div>
  <button @click="testClick">button</button>
</template>

<script setup>
  import { testStore } from '../stores/test1';
  import { storeToRefs } from 'pinia';

  const counter = testStore()

  let {count, testCount} = storeToRefs(counter)

  function testClick(){
    counter.add()
    // count.value ++
  }
</script>

<style lang="scss" scoped>

</style>