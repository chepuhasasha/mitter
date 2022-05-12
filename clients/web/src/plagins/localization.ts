import { App } from "vue";

export default {
  install: (Vue: App): void => {
    Vue.directive("lang", (el: HTMLElement, binding) => {
      const content = el.innerText.split("$");
      content.shift();
      content.forEach((text) => {
        if (text.slice(0, 2) === binding.value) {
          if (el.childNodes[1]) {
            el.childNodes[1].textContent = text.slice(2);
          }
        }
      });
    });
  },
};

