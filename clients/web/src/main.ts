import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import "./style/main.less";
import flex from "./plagins/flex";
import ui from "./components/ui";

createApp(App).use(store, key).use(router).use(flex).use(ui).mount("#app");

