import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    children:[
      {
        path:'/catgory/create',
        name:'catgoryCreate',
        component:resolve => require(['../views/catgoryCreate'],resolve) ,
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
