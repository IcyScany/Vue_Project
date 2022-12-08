<template>
  {{ message }}
  <button @click="showdialog = !showdialog">显示对话框</button>
  <my-dialog-setup-vue v-if="showdialog" @cancel="cancel_dialog" v-model="message">
    <template v-slot:title>
      Hello World
    </template>
  </my-dialog-setup-vue>
  <button @click="pushWithQuery">main</button>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import MyDialogSetupVue from "../components/MyDialogSetup.vue";

let message = ref('')
let showdialog = ref(false);

function cancel_dialog() {
  showdialog.value = false;
}

// 路由跳转
const router = useRouter()
const route = useRoute() // 接收上层路由传递参数

function pushWithQuery() {
  // 路由跳转
  router.push({
    path: './main',
    // query: {
    //   name: 'Scany',
    //   id: '12345'
    // }
  })
}
</script>

<style scoped>

</style>
