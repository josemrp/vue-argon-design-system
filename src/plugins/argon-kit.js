import "@/assets/argon-design-system/vendor/nucleo/css/nucleo.css";
import "@/assets/argon-design-system/vendor/font-awesome/css/font-awesome.css";
import "@/assets/argon-design-system/scss/argon-design-system.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  }
};
