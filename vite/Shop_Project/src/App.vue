<template>
  <div>Shop-Cart-Project</div>
  <div>
    <button @click="gotoshop">shop</button>
    <button @click="gohome">home</button>
  </div>
  <hr>
  <router-view></router-view>
</template>

<script setup>
  import { useRoute, useRouter} from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  function gotoshop() {
    router.push({path: '/shop'})
  }

  function gohome() {
    router.push({path: '/home'})
  }
</script>

<style lang="scss" scoped>
:root{
  font-size: 16px;
  line-height: 24px;
}

html, body{
  height: 100%;
}

*{
  padding: 0;
  margin: 0;
}

button{
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 0.6em 1.5em;
  cursor: pointer;
}

button:hover {
  border-color: #646cff;
}
</style>