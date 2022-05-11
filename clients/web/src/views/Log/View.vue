<template lang="pug">
Page(xAlign='center' gap='40px')
  h1 Log
  h1 {{ SCREEN_MODE }}
  h1 {{ LANG }}
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { BasePage } from "@/compositions/basePage.composition";
import Page from "@/components/templates/Page.vue";

export default defineComponent({
  name: "Log",
  components: {
    Page,
  },
  setup() {
    const state = reactive({
      layout: {
        decktop: {},
        mobile: {},
      },
    });
    const { store, SCREEN_MODE, LANG } = BasePage();
    return {
      ...toRefs(state),
      store,
      SCREEN_MODE,
      LANG,
    };
  },
});
</script>
<style lang="less"></style>
