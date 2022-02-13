import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Titles from '../views/Titles.vue'
import Newspapers from '../views/Newspapers.vue'

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
  },
  {
    path: '/newspapers',
    name: 'Newspapers',
    component: Newspapers
  }
]

const router = new VueRouter({
  routes
})

export default router
