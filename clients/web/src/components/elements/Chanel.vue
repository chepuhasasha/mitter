<template lang="pug">
.chanel(
  v-if='chanel'
  :class="{chanel__active: chanel.id === ACTIVE_CHANEL?.id}"
  @click="select"
  )
  .chanel_title {{ chanel.title }}
</template>

<script lang="ts" setup>
import { ChanelsStore } from "@/compositions/chanelsStore";
import { IChanel } from "@/types/chanel";
import type { PropType } from "vue";
import { ref } from "vue";

const { STORE, ACTIVE_CHANEL } = ChanelsStore();
const props = defineProps({
  chanel: { type: Object as PropType<IChanel>, require: true },
});
const select = () => {
  STORE.dispatch("setActiveChanel", props.chanel);
};

const isOpen = ref(false);
</script>
<style lang="scss">
.chanel {
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid var(--bg_300);
  background: var(--bg_200);
  &:hover {
    background: var(--bg_100);
  }
  &_title {
    color: var(--text_100);
  }
  &__active {
    border: 2px solid var(--btn_active);
    background: var(--btn_active_bg);

    .chanel_title {
      color: var(--btn_active);
    }
  }
}
</style>
