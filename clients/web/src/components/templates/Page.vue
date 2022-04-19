<template lang="pug">
flex.page(v-if='!load' width='100%' height='100%' gap='20px' col)
  slot
flex.page(v-else width='100%' height='100%' xAlign='center' yAlign='center' col gap='20px')
  Loader
  span(v-if='loadMsg') {{ loadMsg }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Loader from "@/components/widgets/Loader.vue";

export default defineComponent({
  name: "Page",
  components: {
    Loader,
  },
  props: {
    load: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    loadMsg: {
      type: String as PropType<string>,
      default: null,
    },
  },
});
</script>
<style lang="less">
.page {
  background: var(--bg_100);
}
</style>
