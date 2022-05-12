import { App } from "vue";

export default {
  install(Vue: App): void {
    Vue.directive("flex", (el: HTMLElement) => {
      el.style.display = "flex";
      el.style.flexDirection = "row";
      el.style.position = "relative";
    });
    Vue.directive("col", (el: HTMLElement) => {
      el.style.flexDirection = "column";
    });
    Vue.directive("gap", (el: HTMLElement, binding) => {
      el.style.gap = `${binding.value}px`;
    });
    Vue.directive("padding", (el: HTMLElement, binding) => {
      el.style.padding = `${binding.value}px`;
    });
    Vue.directive("area", (el: HTMLElement, binding) => {
      el.style.gridArea = binding.value;
    });
    Vue.directive("width", (el: HTMLElement, binding) => {
      el.style.width = binding.value;
    });
    Vue.directive("height", (el: HTMLElement, binding) => {
      el.style.height = binding.value;
    });
    Vue.directive("y-overflow", (el: HTMLElement, binding) => {
      el.style.overflowY = binding.value;
    });
    Vue.directive("x-overflow", (el: HTMLElement, binding) => {
      el.style.overflowX = binding.value;
    });
    Vue.directive("x-align", (el: HTMLElement, binding) => {
      switch (el.style.flexDirection) {
        case "row":
          el.style.justifyContent = binding.value ? binding.value : "center";
          break;
        case "column":
          el.style.alignItems = binding.value ? binding.value : "center";
          break;
      }
    });
    Vue.directive("y-align", (el: HTMLElement, binding) => {
      switch (el.style.flexDirection) {
        case "row":
          el.style.alignItems = binding.value ? binding.value : "center";
          break;
        case "column":
          el.style.justifyContent = binding.value ? binding.value : "center";
          break;
      }
    });
  },
};
