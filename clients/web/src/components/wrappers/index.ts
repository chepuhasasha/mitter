import FlexVue from "./Flex.vue";
import { App } from "vue";

export default {
  install(Vue: App): void {
    Vue.component("Flex", FlexVue);
  },
};
