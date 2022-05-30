import { App } from "vue";
import MessageVue from "./Message.vue";
import MDCardVue from "./MDCard.vue";
import ChartCardVue from "./ChartCard.vue";
import ChanelVue from "./Chanel.vue";

export default {
  install(Vue: App): void {
    Vue.component("Message", MessageVue);
    Vue.component("MDCard", MDCardVue);
    Vue.component("ChartCard", ChartCardVue);
    Vue.component("Chanel", ChanelVue);
  },
};
