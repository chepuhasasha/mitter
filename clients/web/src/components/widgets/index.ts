import IconVue from "./Icon.vue";
import LoaderVue from "./Loader.vue";
import { App } from "vue";

export default {
  install(Vue: App): void {
    Vue.component("Icon", IconVue);
    Vue.component("Loader", LoaderVue);
  },
};
