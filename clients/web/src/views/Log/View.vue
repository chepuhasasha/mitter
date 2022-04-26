<template lang="pug">
Page(xAlign='center' gap='40px')
  h1 Log
  h1 {{ screenMode }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PageInit } from "@/compositions/PageInit";

export default defineComponent({
  name: "Log",
  setup() {
    const { store, screenMode } = PageInit();
    return {
      store,
      screenMode,
    };
  },
});
</script>
<style lang="less"></style>
