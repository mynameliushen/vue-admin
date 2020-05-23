import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/layout'),
      redirect: '/dashboard',
      children: [
        {
          path:'/dashboard',
          component: () => import('@/views/dashboard')
        },
        {
          path: '/form',
          component: () => import('@/views/form')
        },
        {
          path: '/table',
          component: () => import('@/views/table')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    }
  ]
})