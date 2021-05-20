import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
]

const router = new VueRouter({
  routes
})

export default router
