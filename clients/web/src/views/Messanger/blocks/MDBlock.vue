<template lang="pug">
.md_list
  MDCard(v-for='msg in messages' :message="msg")
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { ChanelsStore } from "@/compositions/chanelsStore";

const { ACTIVE_CHANEL } = ChanelsStore();
const messages = computed(() => {
  if (ACTIVE_CHANEL.value) {
    return ACTIVE_CHANEL.value.messages.filter((msg) => msg.type === "md");
  }
  return [];
});
</script>
<style lang="scss">
.md {
  &_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // padding: 10px;
    max-width: 100%;
    height: 100%;
    overflow-y: auto;
    background: var(--bg_200);
  }
}
</style>
