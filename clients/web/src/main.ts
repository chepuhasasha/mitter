import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.less";
import container from "./plagins/container";
import VLang from "@chepuhasasha/v-lang";
import ui from "./components/ui";
import widgets from "./components/widgets";

createApp(App)
  .use(store, key)
  .use(router)
  .use(container)
  .use(VLang)
  .use(widgets)
  .use(ui)
  .mount("#app");
