import Vue from "vue";
import Router from "vue-router";

import ArgonDashboard from '@/layout/argon-dashboard/ArgonDashboard'
import DashboardLayout from '@/layout/argon-dashboard/DashboardLayout'
import AuthLayout from '@/layout/argon-dashboard/AuthLayout'

import AppHeader from "./layout/argon-design-system/AppHeader";
import AppFooter from "./layout/argon-design-system/AppFooter";
import ArgonDesignSystem from "./layout/argon-design-system/ArgonDesignSystem";


import Components from "./views/argon-design-system/Components.vue";
import Landing from "./views/argon-design-system/Landing.vue";
import Login from "./views/argon-design-system/Login.vue";
import Register from "./views/argon-design-system/Register.vue";
import Profile from "./views/argon-design-system/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: '',
      component: ArgonDesignSystem,
      children: [
        {
          path: "/",
          name: "components",
          components: {
            header: AppHeader,
            default: Components,
            footer: AppFooter
          }
        },
        {
          path: "/landing",
          name: "landing",
          components: {
            header: AppHeader,
            default: Landing,
            footer: AppFooter
          }
        },
        {
          path: "/login",
          name: "login",
          components: {
            header: AppHeader,
            default: Login,
            footer: AppFooter
          }
        },
        {
          path: "/register",
          name: "register",
          components: {
            header: AppHeader,
            default: Register,
            footer: AppFooter
          }
        },
        {
          path: "/profile",
          name: "profile",
          components: {
            header: AppHeader,
            default: Profile,
            footer: AppFooter
          }
        }
      ]
    },
    {
      path: '/dashboard',
      component: ArgonDashboard,
      children: [
        {
          path: '/',
          component: DashboardLayout,
          children: [
            {
              path: '',
              name: 'dashboard',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Dashboard.vue')
            },
            {
              path: 'icons',
              name: 'icons',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Icons.vue')
            },
            {
              path: 'profile',
              name: 'profile',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/UserProfile.vue')
            },
            {
              path: 'maps',
              name: 'maps',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Maps.vue')
            },
            {
              path: 'tables',
              name: 'tables',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Tables.vue')
            }
          ]
        },
        {
          path: '/',
          component: AuthLayout,
          children: [
            {
              path: 'login',
              name: 'login',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Login.vue')
            },
            {
              path: 'register',
              name: 'register',
              component: () => import(/* webpackChunkName: "demo" */ '@/views/argon-dashboard/Register.vue')
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
