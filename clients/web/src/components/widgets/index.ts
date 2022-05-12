import { App } from "vue";
import IconVue from "./Icon.vue";
import LoaderVue from "./Loader.vue";
import UtilizationVue from "./Utilization.vue";
import CodeVue from "./Code.vue";

export default {
  install(Vue: App): void {
    Vue.component("Icon", IconVue);
    Vue.component("Loader", LoaderVue);
    Vue.component("Utilization", UtilizationVue);
    Vue.component("Code", CodeVue);
  },
};
