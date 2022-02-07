import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Titles from '../views/Titles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/titles',
    name: 'Titles',
    component: Titles 
  }
]

const router = new VueRouter({
  routes
})

export default router
