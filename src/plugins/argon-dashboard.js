import "@/assets/argon-dashboard/vendor/nucleo/css/nucleo.css";
import "@/assets/argon-dashboard/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "@/components/argon-dashboard/SidebarPlugin/index"
import NotificationPlugin from "@/components/argon-dashboard/NotificationPlugin/index"

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(NotificationPlugin);
  }
};
