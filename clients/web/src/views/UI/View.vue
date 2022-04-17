<template lang="pug">
flex.ui(width='100%' height='100%' col)
  Loader
  Loader(mode='ring' width='40px')
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/widgets/Loader.vue";

export default defineComponent({
  name: "UI",
  components: {
    Loader,
  },
});
</script>

<style lang="less">
.ui {
  background: var(--bg_100);
}
</style>

