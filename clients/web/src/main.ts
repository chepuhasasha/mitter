import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.less";
import VContainer from "@chepuhasasha/v-container";
import VLang from "@chepuhasasha/v-lang";
import ui from "./components/ui";
import widgets from "./components/widgets";
import wrappers from "./components/wrappers";

createApp(App)
  .use(store, key)
  .use(router)
  .use(VContainer)
  .use(VLang)
  .use(widgets)
  .use(wrappers)
  .use(ui)
  .mount("#app");
