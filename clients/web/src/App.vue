<template lang="pug">
router-view
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { key } from "./store";

const store = useStore(key);
const style = ref<HTMLStyleElement>(document.createElement("style"));
const theme = computed((): string =>
  store.state.theme.theme ? store.state.theme.theme : ""
);

watch(
  () => theme.value,
  (n) => {
    if (style.value) {
      style.value.innerText = n as string;
    }
  }
);

onMounted(() => {
  store.dispatch("GET_THEME", "dark");
  document.head.appendChild(style.value);
  if (style.value) {
    style.value.innerText = theme.value;
  }
});
</script>
<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
