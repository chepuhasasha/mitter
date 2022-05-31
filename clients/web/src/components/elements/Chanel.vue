<template lang="pug">
.chanel(
  v-if='chanel'
  :class="{chanel__active: chanel.id === ACTIVE_CHANEL?.id}"
  @click="select"
  )
  .chanel_body
    .chanel_title {{ chanel.title }}
    .chanel_msg(v-if='last') {{ last }}
  Button(icon='settings' size='m')
</template>

<script lang="ts" setup>
import type { IChanel } from "@/types/chanel";
import { computed, PropType } from "vue";
import { ChanelsStore } from "@/compositions/chanelsStore";
import { ref } from "vue";

const { STORE, ACTIVE_CHANEL } = ChanelsStore();
const props = defineProps({
  chanel: { type: Object as PropType<IChanel>, require: true },
});
const last = computed(() => {
  if (props.chanel && props.chanel?.messages.length - 1 >= 0) {
    return props.chanel?.messages[props.chanel?.messages.length - 1].message;
  }
  return null;
});
const select = () => {
  STORE.dispatch("setActiveChanel", props.chanel);
};

const isOpen = ref(false);
</script>
<style lang="scss">
.chanel {
  cursor: pointer;
  display: flex;
  padding: 20px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  border: 2px solid var(--bg_300);
  background: var(--bg_200);
  &:hover {
    background: var(--bg_100);
  }
  &_body {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 5px;
    flex: 0 2 auto;
  }
  &_title {
    color: var(--text_200);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &_msg {
    font-size: 12px;
    color: var(--text_300);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__active {
    cursor: default;
    border: 2px solid var(--btn_active);
    background: var(--btn_active_bg);
    &:hover {
      background: var(--btn_active_bg);
    }

    .chanel_title,
    .chanel_msg {
      color: var(--btn_active);
    }
  }
}
</style>
