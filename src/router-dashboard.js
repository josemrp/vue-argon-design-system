import Vue from 'vue'
import Router from 'vue-router'
import ArgonDashboard from '@/layout/argon-dashboard/ArgonDashboard'
import DashboardLayout from '@/layout/argon-dashboard/DashboardLayout'
import AuthLayout from '@/layout/argon-dashboard/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '',
      component: ArgonDashboard,
      children: [
        {
          path: '/',
          redirect: 'dashboard',
          component: DashboardLayout,
          children: [
            {
              path: '/dashboard',
              name: 'dashboard',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Dashboard.vue')
            },
            {
              path: '/icons',
              name: 'icons',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Icons.vue')
            },
            {
              path: '/profile',
              name: 'profile',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/UserProfile.vue')
            },
            {
              path: '/maps',
              name: 'maps',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Maps.vue')
            },
            {
              path: '/tables',
              name: 'tables',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Tables.vue')
            }
          ]
        },
        {
          path: '/',
          redirect: 'login',
          component: AuthLayout,
          children: [
            {
              path: '/login',
              name: 'login',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Login.vue')
            },
            {
              path: '/register',
              name: 'register',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Register.vue')
            }
          ]
        }
      ]
    }    
  ]
})
