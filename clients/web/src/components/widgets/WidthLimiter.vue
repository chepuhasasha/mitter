<template lang="pug">
.widthLimiter(
  :class='{widthLimiter__active: isActive}'
  @mousedown="down"
)
.widthLimiter_plane(
  v-if='isActive'
  @mousemove="move"
  @mouseup="up"
)
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { PropType } from "vue";
const props = defineProps({
  modelValue: { type: Number as PropType<number>, default: 0 },
  min: { type: Number as PropType<number>, default: 0 },
  max: { type: Number as PropType<number>, default: 100 },
});

const emit = defineEmits("update:modelValue");

const isActive = ref(false);
const start = ref(0);
const staerWidth = ref(0);

const down = (e: PointerEvent) => {
  start.value = e.clientX;
  staerWidth.value = props.modelValue;
  isActive.value = true;
};
const up = () => {
  isActive.value = false;
};
const move = (e: MouseEvent) => {
  if (isActive.value) {
    const width = staerWidth.value + (e.clientX - start.value);
    if (width < props.max && width > props.min) {
      emit("update:modelValue", width);
    }
  }
};
</script>
<style lang="scss">
.widthLimiter {
  cursor: col-resize;
  width: 10px;
  height: 100%;
  background: var(--bg_200);
  &:hover {
    background: var(--input_hover_bg);
  }
  &__active {
    &:hover {
      background: var(--input_active_bg);
    }
    background: var(--input_active_bg);
  }

  &_plane {
    cursor: col-resize;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
}
</style>
