<template lang="pug">
Page(xAlign='center' yAlign='center')
  Block
    Logo(size='s')
    h3 Login

</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/templates/Page.vue";
import Block from "@/components/templates/Block.vue";
import Logo from "@/components/widgets/Logo.vue";

export default defineComponent({
  name: "Login",
  components: {
    Page,
    Block,
    Logo,
  },
});
</script>
<style lang="less"></style>
