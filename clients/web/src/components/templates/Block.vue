<template lang="pug">
flex.block(gap='10px' col padding='10px')
  slot(v-if='!load')
  flex(v-if='load' width='100%' height='100%' xAlign='center' yAlign='center' col gap='20px')
    Loader
    span(v-if='loadMsg') {{ loadMsg }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Loader from "@/components/widgets/Loader.vue";

export default defineComponent({
  name: "Block",
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
.block {
  background: var(--bg_200);
}
</style>
