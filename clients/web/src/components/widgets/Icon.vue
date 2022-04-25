<template lang="pug">
svg(viewBox='0 0 512 512' :width='size' :height='size' @click='click' :style='getStyle')
  path(v-for='path in getPaths' :d='path' :fill='fill')
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { IconName, icons } from "./icons";
export default defineComponent({
  name: "Icon",
  props: {
    icon: {
      type: String as PropType<IconName>,
      default: "error",
    },
    fill: {
      type: String as PropType<string>,
      default: "var(--text_100)",
    },
    size: {
      type: String as PropType<string>,
      default: "14px",
    },
    pointer: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const getPaths = computed((): string[] => icons.getPaths(props.icon));
    const getStyle = computed(() => ({
      cursor: props.pointer ? "pointer" : "default",
      maxWidth: props.size,
      minWidth: props.size,
      maxHeight: props.size,
      minHeight: props.size,
    }));
    return { getPaths, getStyle };
  },
});
</script>
