<template lang="pug">
flex.button(
  yAlign='center'
  tag="button"
  :class="[getStyleState, mode ? mode : null]"
  :title="title"
  :style='style'
)
  slot
  Icon(v-if='icon && !load' pointer :icon='icon' :size='style.fontSize')
  Loader(v-if='load' :width='style.fontSize' mode='ring')
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { IconName } from "../widgets/icons";
import Icon from "../widgets/Icon.vue";
import Loader from "../widgets/Loader.vue";

export default defineComponent({
  components: {
    Icon,
    Loader,
  },
  props: {
    mode: {
      type: String as PropType<string | null>,
      default: null,
    },
    title: {
      type: String as PropType<string | null>,
      default: null,
    },
    icon: {
      type: String as PropType<IconName | null>,
      default: null,
    },
    active: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    load: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disable: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    size: {
      type: String as PropType<"xs" | "s" | "m" | "l" | "xl">,
      default: "m",
    },
  },

  setup(props) {
    const getStyleState = computed(() => {
      let result = null;
      if (props.active) {
        result = "button_active";
      }
      if (props.disable) {
        result = "button_disable";
      }
      return result;
    });

    const style = computed(() => {
      const modes = {
        xs: {
          padding: "4px",
          gap: "4px",
          borderRadius: "4px",
          fontSize: "10px",
          lineHeight: "10px",
        },
        s: {
          padding: "4px",
          gap: "4px",
          borderRadius: "4px",
          fontSize: "12px",
          lineHeight: "12px",
        },
        m: {
          padding: "10px",
          gap: "10px",
          borderRadius: "6px",
          fontSize: "14px",
          lineHeight: "14px",
        },
        l: {
          padding: "12px",
          gap: "12px",
          borderRadius: "10px",
          fontSize: "16px",
          lineHeight: "16px",
        },
        xl: {
          padding: "20px",
          gap: "20px",
          borderRadius: "40px",
          fontSize: "16px",
          lineHeight: "16px",
        },
      };
      if (Object.keys(modes).includes(props.size)) {
        return modes[props.size];
      } else {
        return modes.m;
      }
    });
    return { getStyleState, style };
  },
});
</script>

<style lang="less">
.button {
  cursor: pointer;
  font-family: var(--font_200);
  border: var(--btn_border);
  font-weight: 500;
  background: var(--btn_bg);
  color: var(--text_200);

  &:hover {
    color: var(--text_100);
    background: var(--btn_hover_bg);
  }

  &:focus {
    outline: none;
    border: 2px solid var(--btn_hover_bg);
  }

  &_active {
    background: var(--btn_active_bg);
    color: var(--text_100);
    box-shadow: 0 0 30px -8px var(--btn_active_bg);
    border-color: var(--btn_active_bg);

    &:hover {
      background: var(--btn_hover_bg);
      border-color: var(--btn_hover_bg);
    }
  }
  &_disable {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background: var(--btn_bg);
    }
  }
}
</style>
