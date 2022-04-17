import { createApp } from "vue";
import App from "./App.vue";
import FlexVue from "./components/wrappers/Flex.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.less";

createApp(App)
  .use(store, key)
  .use(router)
  .component("flex", FlexVue)
  .mount("#app");
