import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import {createRouter, createWebHashHistory} from 'vue-router'

// 路由配置
let routes = [
  { path: '/', component: () => import('./views/login.vue')},
  { path: '/main', component: () => import('./views/main.vue'), 
    children: [
      {path: '/main/page1', component: () => import('./views/page1.vue')},
      {path: '/main/page2', component: () => import('./views/page2.vue')}
  ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

let app = createApp(App)
app.use(router)

app.use(createPinia())

app.mount('#app')
