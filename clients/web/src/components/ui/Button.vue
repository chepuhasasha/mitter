<template lang="pug">
flex.button(
  yAlign='center'
  gap='10px'
  tag="button"
  padding='10px'
  :class="[getStyleState, mode ? mode : null]"
  :title="title"
)
  slot
  Icon(v-if='icon && !load' pointer :icon='icon')
  Loader(v-if='load' width='14px' mode='ring')
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
    return { getStyleState };
  },
});
</script>

<style lang="less">
.button {
  cursor: pointer;
  font-family: var(--font_200);
  border: var(--btn_border);
  border-radius: 6px;
  line-height: 14px;
  font-size: 14px;
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

    &:hover {
      background: var(--btn_hover_bg);
    }
  }
  &_disable {
    opacity: 0.5;

    &:hover {
      background: var(--btn_bg);
    }
  }
}
</style>
