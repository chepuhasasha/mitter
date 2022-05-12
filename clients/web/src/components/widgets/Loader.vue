<template lang="pug">
.pulse(v-if='mode === "pulse"' :style='getSize')
  .pulse_circle
  .pulse_circle
  .pulse_circle
.ring(v-if='mode === "ring"' :style='getSize')


</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Loader",
  props: {
    size: {
      type: String as PropType<string>,
      default: "100px",
    },
    mode: {
      type: String as PropType<string>,
      default: "pulse",
    },
  },
  setup(props) {
    const getSize = computed(() => ({
      width: props.size,
      minWidth: props.size,
      maxWidth: props.size,
      height: props.size,
      minHeight: props.size,
      maxHeight: props.size,
    }));
    return { getSize };
  },
});
</script>
<style lang="less" scoped>
.pulse {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  &_circle {
    position: absolute;
    border: 4px solid var(--text_100);
    opacity: 1;
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  &_circle:nth-child(2) {
    animation-delay: -1s;
  }
  &_circle:nth-child(1) {
    animation-delay: -0.5s;
  }
}
.ring {
  display: inline-block;
  &:after {
    content: " ";
    display: block;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 2px solid var(--text_100);
    border-color: var(--text_100) transparent var(--text_100) transparent;
    animation: ring 1.2s linear infinite;
  }
}
@keyframes ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    top: 45%;
    left: 45%;
    width: 10%;
    height: 10%;
    opacity: 0.5;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
