<template lang="pug">
flex.alert(gap='10px' padding='10px' yAlign='center' :style='style')
  slot
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<"info" | "ok" | "warn" | "error">,
      default: "info",
    },
  },
  setup(props) {
    const style = computed(() => {
      const modes = ["ok", "warn", "error"];
      if (modes.includes(props.mode)) {
        return {
          color: `var(--${props.mode}_100)`,
          background: `var(--${props.mode}_300)`,
          borderColor: `var(--${props.mode}_200)`,
        };
      }
      return {
        color: "var(--text_100)",
        background: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      };
    });
    return {
      style,
    };
  },
});
</script>
<style lang="less">
.alert {
  border-radius: 10px;
  font-weight: 200;
  font-family: var(--font_200);
  border: 1px dashed;
}
</style>
