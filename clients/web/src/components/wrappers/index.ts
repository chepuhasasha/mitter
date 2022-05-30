import { App } from "vue";
import ModalVue from "./Modal.vue";

export default {
  install(Vue: App): void {
    Vue.component("Modal", ModalVue);
  },
};
