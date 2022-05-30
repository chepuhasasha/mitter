import { App } from "vue";
import MessageVue from "./Message.vue";
import MDCardVue from "./MDCard.vue";
import ChartCardVue from "./ChartCard.vue";

export default {
  install(Vue: App): void {
    Vue.component("Message", MessageVue);
    Vue.component("MDCard", MDCardVue);
    Vue.component("ChartCard", ChartCardVue);
  },
};
