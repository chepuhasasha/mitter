<template lang="pug">
button.button(:class="mode")
  slot
  Icon(v-if='icon && !load' pointer :icon='icon')
  Loader(v-if='load' size='14px' mode='ring')
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { IconName } from "@/types/icons";

const props = defineProps<{
  icon?: IconName;
  load?: boolean;
  active?: boolean;
  size: "s" | "m" | "l";
}>();

const mode = computed(() => ({
  button_active: props.active,
  [`button_${props.size}`]: true,
}));
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  width: max-content;
  height: max-content;
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
  // &:focus {
  //   border: 2px solid var(--btn_active);
  //   color: var(--btn_active);
  // }
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
