<template lang="pug">
.chat_filters
  Button(size='s' @click="select('info')" :active='selectedTypes.includes("info")') INFO
  Button(size='s' @click="select('warn')" :active='selectedTypes.includes("warn")') WARN
  Button(size='s' @click="select('error')" :active='selectedTypes.includes("error")') ERROR
  Button(size='s' @click="select('md')" :active='selectedTypes.includes("md")') MD
  Button(size='s' @click="select('json')" :active='selectedTypes.includes("json")') JSON
  Button(size='s' @click="select('utilization')" :active='selectedTypes.includes("utilization")') UTILIZATION
.chat_messages(ref='list')
  transition-group(name='slide-fade')
    Message(v-for='message in filtresMessages' :key='message' :message='message')
    span(v-if='filtresMessages.length === 0') no massages...
.chat_send
  Input(placeholder='message' @focus="sendToggle")
  Button(v-show='sendOpen' size='l' active) SEND
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";
import type { IMessage } from "@/types/message";

const props = defineProps({
  messages: { type: Array as PropType<IMessage[]>, required: true },
});
const selectedTypes = ref([
  "info",
  "warn",
  "error",
  "md",
  "json",
  // "utilization",
]);
const select = (type) => {
  if (selectedTypes.value.includes(type)) {
    selectedTypes.value = selectedTypes.value.filter((t) => t != type);
    return;
  }
  selectedTypes.value.push(type);
};
const filtresMessages = computed(() =>
  props.messages.filter((msg) => selectedTypes.value.includes(msg.type))
);
const sendOpen = ref(false);
const sendToggle = (e) => {
  sendOpen.value = e;
};
</script>
<style lang="scss">
.chat {
  &_filters {
    background: var(--bg_200);
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 10px;
    height: max-content;
    flex: 0 0 auto;
    min-height: max-content;
  }
  &_messages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    padding: 10px;
    overflow: auto;
    background: var(--bg_200);
  }
  &_send {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 10px;
    background: var(--bg_200);
  }
}
</style>
