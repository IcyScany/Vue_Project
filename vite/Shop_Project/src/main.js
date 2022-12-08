import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// 引入pinia
import { createPinia } from 'pinia'


// 引入路由
import {createRouter, createWebHashHistory} from 'vue-router'

let routes = [
  { path:'/home', component: ()=> import('./views/home.vue')},
  { path:'/shop', component: ()=> import('./views/shop.vue')},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


let app = createApp(App)
app.use(router)

app.use(createPinia())

app.mount('#app')
