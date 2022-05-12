import { App } from "vue";

export default {
  install(Vue: App): void {
    Vue.directive("lang", (el: HTMLElement, binding) => {
      el.childNodes.forEach((children) => {
        if (children.textContent?.includes("$")) {
          const text = children.textContent.split("$");
          text.shift();
          text.forEach((content) => {
            if (content.slice(0, 2) === binding.value) {
              children.textContent = content.slice(2);
            }
          });
        }
      });
    });
  },
};
