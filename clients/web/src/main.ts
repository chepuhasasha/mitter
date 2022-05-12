import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.less";
import flex from "./plagins/flex";
import localization from "./plagins/localization";
import ui from "./components/ui";
import widgets from "./components/widgets";

createApp(App)
  .use(store, key)
  .use(router)
  .use(flex)
  .use(localization)
  .use(widgets)
  .use(ui)
  .mount("#app");
