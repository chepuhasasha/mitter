<template lang="pug">
component.flex(
  :is="tag"
  :style="style"
)
  slot
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    area: {
      type: String as PropType<string | null>,
      default: null,
    },
    tag: {
      type: String as PropType<string>,
      default: "div",
    },
    gap: {
      type: String as PropType<string | null>,
      default: null,
    },
    padding: {
      type: [String, Number] as PropType<string | null>,
      default: null,
    },
    width: {
      type: [String, Number] as PropType<string>,
      default: "max-content",
    },
    height: {
      type: [String, Number] as PropType<string>,
      default: "max-content",
    },
    col: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    hardSize: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    xAlign: {
      type: String as PropType<string>,
      default: "start",
    },
    yAlign: {
      type: String as PropType<string>,
      default: "start",
    },
    xOverflow: {
      type: String as PropType<string>,
      default: "none",
    },
    yOverflow: {
      type: String as PropType<string>,
      default: "none",
    },
  },
  setup(props) {
    const style = computed(() => {
      const result: {
        [K in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[K];
      } = {};

      // Sizing
      result.width = props.width;
      result.height = props.height;
      if (props.hardSize) {
        result.maxWidth = result.width;
        result.minWidth = result.width;
        result.maxHeight = result.height;
        result.minHeight = result.height;
      }
      // Aligment
      result.flexDirection = props.col ? "column" : "row";
      result.overflowX = props.xOverflow;
      result.overflowY = props.yOverflow;
      if (props.col) {
        result.alignItems = props.xAlign;
        result.justifyContent = props.yAlign;
      } else {
        result.alignItems = props.yAlign;
        result.justifyContent = props.xAlign;
      }
      if (props.area) {
        result.gridArea = props.area;
      }
      // Indents
      if (props.gap) {
        result.gap = props.gap;
      }
      if (props.padding) {
        result.padding = props.padding;
      }
      return result;
    });

    return { style };
  },
});
</script>

<style lang="less">
.flex {
  display: flex;
  position: relative;
  &::-webkit-scrollbar {
    background: var(--scroll);
    width: 4px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--scroll_thumb);
  }
}
</style>

