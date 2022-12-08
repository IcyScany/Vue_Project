<template>
  <div>
    <button @click="gotopage(1)">page1</button>
    <button @click="gotopage(2)">page2</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function gotopage(x) {
  router.push({ path: "/main/page"+x });
}
</script>

<style scoped></style>
