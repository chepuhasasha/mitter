import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.less";
import wrappers from "./components/wrappers";
import ui from "./components/ui";
import widgets from "./components/widgets";

createApp(App)
  .use(store, key)
  .use(router)
  .use(wrappers)
  .use(widgets)
  .use(ui)
  .mount("#app");
