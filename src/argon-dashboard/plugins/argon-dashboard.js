import "@/argon-dashboard/assets/vendor/nucleo/css/nucleo.css";
import "@/argon-dashboard/assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "@/argon-dashboard/components/SidebarPlugin/index"
import NotificationPlugin from "@/argon-dashboard/components/NotificationPlugin/index"

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(NotificationPlugin);
  }
};
