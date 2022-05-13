// COMPLETE: [Icon.vue]
<template lang="pug">
svg(viewBox='0 0 512 512' :width='size' :height='size' @click='click' :style='getStyle')
  path(v-for='path in getPaths' :d='path' :fill='fill')
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { PropType } from "vue";
import type { IconName } from "../interfaces/icons";
import { icons } from "../interfaces/icons";

const props = defineProps({
  icon: { type: String as PropType<IconName>, default: "error" },
  fill: { type: String, default: "var(--text_100)" },
  size: { type: String, default: "14px" },
  pointer: { type: Boolean, default: false },
});

const getPaths = computed((): string[] => {
  if (icons[props.icon]) {
    return icons[props.icon];
  } else {
    return icons.error;
  }
});
const getStyle = computed(() => ({
  cursor: props.pointer ? "pointer" : "default",
  maxWidth: props.size,
  minWidth: props.size,
  maxHeight: props.size,
  minHeight: props.size,
}));
</script>
