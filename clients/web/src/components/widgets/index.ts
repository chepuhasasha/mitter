import { App } from "vue";
import IconVue from "./Icon.vue";
import LoaderVue from "./Loader.vue";
import UtilizationVue from "./Utilization.vue";
import CodeVue from "./Code.vue";
import WidthLimiterVue from "./WidthLimiter.vue";
import ChartVue from "./Chart.vue";
import MDVue from "./MD.vue";

export default {
  install(Vue: App): void {
    Vue.component("Chart", ChartVue);
    Vue.component("Icon", IconVue);
    Vue.component("Loader", LoaderVue);
    Vue.component("Utilization", UtilizationVue);
    Vue.component("Code", CodeVue);
    Vue.component("MD", MDVue);
    Vue.component("WidthLimiter", WidthLimiterVue);
  },
};
