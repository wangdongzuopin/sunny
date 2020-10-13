import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from "@/views/Home"
import Maper from '@/views/Maper'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maper',
    name: 'Maper',
    component: Maper
  },
]
const router = new VueRouter({
  routes
})


export default router