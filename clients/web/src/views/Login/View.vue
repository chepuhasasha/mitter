<template lang="pug">
Page(xAlign='center' yAlign='center')
  Logo(size='m' text)
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/templates/Page.vue";
import Logo from "@/components/widgets/Logo.vue";

export default defineComponent({
  name: "Login",
  components: {
    Page,
    Logo,
  },
});
</script>
<style lang="less"></style>

