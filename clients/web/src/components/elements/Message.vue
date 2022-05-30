<template lang="pug">
.message(:class='{message__event: message.isEvent}' ref='msg')
  .message_header
    Icon(:icon='map.icon' :fill='map.color')
    .message_type(:style='{color: map.color}') {{ message.type }}
    .message_nickname {{ message.nickname }}
  component(v-if='message.props && map.widget' :is='map.widget' v-bind='message.props')
  .message_msg {{ message.message }}
  .message_time {{ time }}

</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import type { PropType } from "vue";
import type { IMessage } from "@/types/message";
import { computed, ref } from "vue";

const props = defineProps({
  message: { type: Object as PropType<IMessage>, required: true },
});
const map = computed(() => {
  const map: Record<string, { color: string; widget?: string; icon: string }> =
    {
      json: { color: "var(--text_100)", widget: "Code", icon: "json" },
      md: { color: "var(--text_100)", widget: "MD", icon: "md" },
      utilization: { color: "white", widget: "Utilization", icon: "pie" },
      warn: { color: "var(--warn_100)", icon: "warn" },
      error: { color: "var(--error_100)", icon: "error" },
    };
  if (map[props.message.type]) {
    return map[props.message.type];
  }
  return { icon: "info", color: "var(--text_100)" };
});
const time = computed(() => {
  const d = new Date(props.message.time);
  const result = {
    h: d.getHours() < 10 ? `0${d.getHours()}` : d.getHours(),
    m: d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes(),
    s: d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds(),
    ms: d.getMilliseconds(),
    d: d.getDate() < 10 ? `0${d.getDate()}` : d.getDate(),
    mo: d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1,
    y: d.getFullYear(),
  };
  return `${result.d}.${result.mo}.${result.y} - ${result.h}:${result.m}:${result.s}.${result.ms}`;
});

const msg = ref<HTMLElement | null>(null);
onMounted(() => {
  if (msg.value) {
    msg.value.scrollIntoView();
  }
});
</script>
<style lang="scss">
.message {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  align-self: flex-start;
  width: max-content;
  max-width: calc(100% - 40px);
  background: var(--bg_100);
  border-radius: 2px 10px 10px 10px;
  border: 2px solid var(--bg_300);

  &_msg {
    font-size: 14px;
    font-weight: 300;
  }
  &_header {
    display: flex;
    width: 100%;
    gap: 5px;
    align-items: center;
    font-size: 12px;
  }
  &_type {
    width: 100%;
    text-transform: uppercase;
  }
  &_time {
    align-self: end;
    white-space: nowrap;
    opacity: 0.6;
    font-weight: 300;
    font-size: 12px;
  }
  &_nickname {
    width: max-content;
    font-size: 12px;
    background: var(--bg_200);
    padding: 5px 10px;
    border-radius: 5px;
  }

  &__event {
    background: var(--bg_200);
    border-radius: 10px 2px 10px 10px;
    align-self: flex-end;
  }
}
</style>
