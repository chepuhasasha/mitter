<template lang="pug">
transition(name='modal-fade')
  .modal(v-if="modelValue")
    .modal_wrapper
      .modal_header
        .modal_header_title {{ title }}
        .modal_header_cross(@click="$emit('update:modelValue', false)")
          Icon
      .modal_body
        slot
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  title: { type: String as PropType<string>, default: "Alert" },
});
const test = () => {
  isIn.value = false;
  console.log(isIn.value);
};

const isIn = ref(false);
</script>
<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  &_header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    &_title {
      opacity: 0.6;
    }
    &_cross {
    }
  }
  &_wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 2px solid var(--bg_300);
    background: var(--bg_200);
    padding: 20px;
    border-radius: 10px;
    width: max-content;
    height: max-content;
    max-width: 90vw;
    max-height: 90vh;
    box-shadow: 0 0 50px 0px rgba(0, 0, 0, 0.5);
  }
  &_body {
    display: flex;
    max-width: 100%;
    max-height: 100%;
  }
}

.modal-fade {
  &-enter-active {
    transition: all 0.3s ease-out;
    .modal_wrapper {
      transition: all 0.3s ease-out;
    }
  }
  &-leave-active {
    transition: all 0.3s ease-out;
    .modal_wrapper {
      transition: all 0.3s ease-out;
    }
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    .modal_wrapper {
      transform: scale(1.1);
    }
  }
}
</style>
