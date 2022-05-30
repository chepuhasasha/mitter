<template lang="pug">
.md_card
  MD(:code='message.props?.code' v-if='preview')
  Code(lang="markdown" :modelValue='message.props?.code' v-if='!preview')
  .md_card_footer
    Button(size='s' active @click='preview = !preview') {{ preview ? "RAW" : "PREVIEW"}}
    Button(size='s') Copy
  .md_card_message {{ message.message }}
  .md_card_time {{ time }}
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import type { IMessage } from "@/types/message";
import { computed, ref } from "vue";

const props = defineProps({
  message: { type: Object as PropType<IMessage>, required: true },
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

const preview = ref(true);
</script>
<style lang="scss">
.md_card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  border-bottom: 2px solid var(--bg_100);
  &_footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &_time {
    font-size: 12px;
    align-self: flex-end;
    opacity: 0.6;
  }
  &_message {
    font-size: 12px;
    opacity: 0.6;
  }
}
</style>
