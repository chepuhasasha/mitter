import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.scss";
import VLang from "@chepuhasasha/v-lang";
import ui from "./components/ui";
import wrappers from "./components/wrappers";
import widgets from "./components/widgets";
import elements from "./components/elements";

createApp(App)
  .use(store, key)
  .use(router)
  .use(VLang)
  .use(wrappers)
  .use(widgets)
  .use(elements)
  .use(ui)
  .mount("#app");
