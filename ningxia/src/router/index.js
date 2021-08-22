import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import '../../css/reset.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/product',
    component: () => import('@/views/product/index')
  },
  {
    path: '/detail/:id/:title',
    component: () => import('@/views/detail/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
