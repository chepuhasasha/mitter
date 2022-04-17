<template lang="pug">
flex.ui(width='100%' height='100%' gap='20px' padding='20px')
  Loader(width='40px')
  Loader(mode='ring' width='40px')
  Icon(icon='error' :size='40')
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/widgets/Loader.vue";
import Icon from "@/components/widgets/Icon.vue";

export default defineComponent({
  name: "UI",
  components: {
    Loader,
    Icon,
  },
});
</script>

<style lang="less">
.ui {
  background: var(--bg_100);
}
</style>

