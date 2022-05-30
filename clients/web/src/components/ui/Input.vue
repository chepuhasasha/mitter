<template lang="pug">
.input(:class='getClasses')
  transition(name='slide-fade')
    span.input_error_text(v-if='error') {{ error }}
  Icon(v-if='icon && !load' :icon='icon')
  Loader(v-if='load' size='14px' mode='ring')
  input(
    :title="title"
    v-bind="$attrs"
    :value='modelValue'
    @focus='focus=true'
    @blur='focus=false'
    @input='$emit("update:modelValue", $event.target?.value)'
  )
  Icon(pointer icon='cross' size='10px' v-if="modelValue && !nobtn" @click='$emit("update:modelValue", null)')
  slot
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";
import type { IconName } from "../interfaces/icons";

const props = defineProps({
  modelValue: { type: String as PropType<string | null>, default: null },
  title: { type: String as PropType<string>, default: "" },
  icon: { type: String as PropType<IconName | null>, default: null },
  nobtn: { type: Boolean as PropType<boolean>, default: false },
  load: { type: Boolean as PropType<boolean>, default: false },
  error: { type: String as PropType<string>, default: "" },
});
const focus = ref(false);
const getClasses = computed(() => ({
  input_focus: focus.value,
  input_error: props.error,
}));
</script>
<style lang="scss">
.input {
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;

  background: var(--input_bg);
  border: var(--input_border);
  border-radius: 8px;

  input {
    padding: 0;
    background: none;
    outline: none;
    border: none;
    width: 100%;
    color: var(--text_100);
    font-size: 13px;
    font-size: 14px;
    font-weight: 300;
  }
  &:hover {
    background: var(--input_hover_bg);
  }
  &_focus {
    border-color: var(--input_active_bg);
  }
  &_error {
    border-color: var(--error_100);
    animation: shake 0.5s;
    &_text {
      position: absolute;
      font-size: 12px;
      top: -10px;
      background: var(--error_100);
      border-radius: 6px;
      padding: 2px 6px;
      box-shadow: 0 0px 20px -5px var(--error_200);
    }
  }
}
</style>
