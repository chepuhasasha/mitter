import Button from "./Button.vue";
import Input from "./Input.vue";
import { App } from "vue";

export default {
  install(Vue: App): void {
    Vue.component("Button", Button);
    Vue.component("Input", Input);
  },
};
