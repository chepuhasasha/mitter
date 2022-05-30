<template lang="pug">
.chat_filters(v-if="ACTIVE_CHANEL")
  Button(size='s' @click="select('info')" :active='selectedTypes.includes("info")') INFO
  Button(size='s' @click="select('warn')" :active='selectedTypes.includes("warn")') WARN
  Button(size='s' @click="select('error')" :active='selectedTypes.includes("error")') ERROR
  Button(size='s' @click="select('md')" :active='selectedTypes.includes("md")') MD
  Button(size='s' @click="select('json')" :active='selectedTypes.includes("json")') JSON
  Button(size='s' @click="select('utilization')" :active='selectedTypes.includes("utilization")') UTILIZATION
//- .chat_messages(ref='list')
transition-group.chat_messages(
  tag='div'
  :css='false'
  @leave="onLeave"
  @after-enter="onAfterEnter"
)
  Message(
    v-for='(message, i) in filtresMessages'
    :key='message' :message='message'
    :data-index='i'
  )
  span(v-if='filtresMessages.length === 0') no massages...
.chat_send(v-if="ACTIVE_CHANEL")
  Input(placeholder='message' @focus="sendToggle")
  Button(v-show='sendOpen' size='l' active) SEND
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { ChanelsStore } from "@/compositions/chanelsStore";
import gsap from "gsap";

const { ACTIVE_CHANEL } = ChanelsStore();
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
const filtresMessages = computed(() => {
  if (ACTIVE_CHANEL.value) {
    return ACTIVE_CHANEL.value.messages.filter((msg) =>
      selectedTypes.value.includes(msg.type)
    );
  }
  return [];
});

const sendOpen = ref(false);
const sendToggle = (e) => {
  sendOpen.value = e;
};
const onLeave = (el: HTMLElement, done: undefined) => {
  gsap.to(el, {
    padding: 0,
    opacity: 0,
    height: 0,
    scale: 0,
    marginTop: 0,
    marginBottom: 0,
    delay: el.dataset.index * 0.05,
    onComplete: done,
  });
};
const onAfterEnter = (el: HTMLElement) => {
  if (el.dataset.index == filtresMessages.value.length - 1) {
    el.scrollIntoView();
  }
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
    // gap: 10px;
    .message {
      margin: 5px 0;
    }
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
    background: var(--bg_100);
  }
}
</style>
