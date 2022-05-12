// TODO: Refactor Input.vue
<template lang="pug">
.input(v-y-align v-padding='10' v-gap='10' width='100%' :class='getClasses')
  transition(name='slide-fade')
    span.input_error_text(v-if='error') {{ error }}
  Icon(v-if='icon' :icon='icon')
  input(
    :title="title"
    v-bind="$attrs"
    :value='modelValue'
    @focus='focus=true'
    @blur='focus=false'
    @input='$emit("update:modelValue", $event.target.value)'
  )
  slot
  Icon(pointer icon='error' v-if="modelValue && !nobtn && !load" @click="clear")
  Loader(v-if='load' width='14px' mode='ring')
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, toRefs } from "vue";
import { IconName } from "../interfaces/icons";
import Icon from "../widgets/Icon.vue";
import Loader from "../widgets/Loader.vue";

export default defineComponent({
  components: {
    Icon,
    Loader,
  },
  props: {
    modelValue: {
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
    nobtn: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    load: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    error: {
      type: String as PropType<string>,
      default: "",
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const state = reactive({
      focus: false,
    });
    const clear = () => {
      emit("update:modelValue", null);
    };

    const getClasses = computed(() => ({
      input_focus: state.focus,
      input_error: props.error,
    }));

    return { clear, ...toRefs(state), getClasses };
  },
});
</script>
<style lang="less">
.input {
  display: flex;
  width: max-content;
  padding: 10px;
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
  background: var(--input_bg);
  border: var(--input_border);
  border-radius: 8px;
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
      // color: var(--error_100);
    }
  }
}
</style>

