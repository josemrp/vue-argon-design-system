import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import ArgonDesignSystem from "./layout/ArgonDesignSystem";

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
