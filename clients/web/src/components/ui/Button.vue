// TODO: Refactor Button.vue
<template lang="pug">
button.button(
  v-flex
  v-y-align
  v-width='"max-content"'
  :class="mode")
  slot
  Icon(v-if='icon && !load' pointer :icon='icon')
  Loader(v-if='load' width='14px' mode='ring')
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { IconName } from "../interfaces/icons";
import Loader from "../widgets/Loader.vue";

export default defineComponent({
  components: {
    Loader,
  },
  props: {
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
    size: {
      type: String as PropType<"s" | "m" | "l">,
      default: "s",
    },
  },

  setup(props) {
    const mode = computed(() => ({
      button_active: props.active,
      [`button_${props.size}`]: true,
    }));
    return { mode };
  },
});
</script>

<style lang="less">
.button {
  outline: none;
  cursor: pointer;
  background: var(--btn_bg);
  border: 2px solid var(--btn_bg);
  color: var(--text_200);
  &:hover {
    background: var(--btn_active);
    color: var(--text_100);
    border: 2px solid var(--btn_active);
  }
  &:focus {
    border: 2px solid var(--btn_active);
    color: var(--btn_active);
  }
  &_active {
    color: var(--btn_active);
    background: var(--btn_active_bg);
    border: 2px solid var(--btn_active_bg);
  }
  &_s {
    padding: 10px;
    gap: 10px;
    border-radius: 10px;
    font-size: 12px;
    line-height: 10px;
  }
  &_m {
    padding: 14px;
    gap: 10px;
    border-radius: 10px;
    font-size: 14px;
    line-height: 12px;
  }
  &_l {
    padding: 40px;
    gap: 10px;
    border-radius: 40px;
    font-size: 16px;
    line-height: 14px;
  }
}
</style>

