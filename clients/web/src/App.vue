<template lang="pug">
router-view
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "./store";

const store = useStore(key);
const resize = (e: { target: Window }) => {
  store.dispatch("setScreenMode", e.target.innerWidth);
};

onMounted(() => {
  store.dispatch("setTheme", "dark");
  store.dispatch("setScreenMode", window.innerHeight);
  window.addEventListener("resize", resize);
});
</script>
<style lang="less">
#app {
  background: var(--bg_100);
  width: 100vw;
  height: 100vh;
}
</style>
