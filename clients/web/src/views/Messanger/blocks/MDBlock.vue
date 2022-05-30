<template lang="pug">
.md_list
  MDCard(v-for='(msg, i ) in messages' :message="msg")
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import type { IMessage } from "@/types/message";
import { computed, ref } from "vue";

const props = defineProps({
  messages: { type: Object as PropType<IMessage[]>, required: true },
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
