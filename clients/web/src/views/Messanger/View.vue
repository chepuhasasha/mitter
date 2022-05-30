<template lang="pug">
.messanger
  .messanger_nav
    h3 USER
    h3 CHANELS BLOCK
  .messanger_chat(:style="{width: `${chatWidth}px`}")
    ChatBlock(:messages="chanel.messages")
  WidthLimiter(v-model="chatWidth" :min='400' :max='700')
  .messanger_charts(:style="{width: `${chartWidth}px`}")
    ChartsBlock(:messages="chanel.messages.filter(m => m.type === 'utilization')")
  WidthLimiter(v-model="chartWidth" :min='300' :max='500')
  .messanger_md
    MDBlock(:messages='mdMessages')
</template>

<script lang="ts" setup>
import type { IMessage } from "@/types/message";
import { computed, reactive, ref } from "vue";
import ChatBlock from "./blocks/ChatBlock.vue";
import ChartsBlock from "./blocks/ChartsBlock.vue";
import MDCard from "@/components/elements/MDCard.vue";
import MDBlock from "./blocks/MDBlock.vue";

const chanel = reactive<{ messages: IMessage[] }>({
  messages: [
    {
      type: "info",
      time: Date.now(),
      nickname: "Server",
      message: "test message",
    },
    {
      type: "warn",
      time: Date.now(),
      nickname: "Server",
      message: "test message",
    },
    {
      type: "error",
      time: Date.now(),
      nickname: "Server",
      message: "test message",
    },
    {
      type: "md",
      time: Date.now(),
      props: {
        code: "# Daily order\n## test\n### test\n orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      nickname: "Server",
      message: "MD message...",
    },
    {
      type: "json",
      isEvent: true,
      time: Date.now(),
      props: {
        lang: "json",
        modelValue:
          '{\n  "test": "test",\n  "test2": "test",\n  "test3": "test"\n}',
      },
      nickname: "Server",
      message: "Json message...",
    },
  ],
});
const getMetrica = computed(() => {
  return chanel.messages.filter(
    (msg) => msg.type === "utilization" && msg.props?.name === "CPU"
  );
});
const mdMessages = computed(() => {
  return chanel.messages.filter((msg) => msg.type === "md");
});
const chatWidth = ref(600);
const chartWidth = ref(400);
let i = 0;
setInterval(() => {
  i++;
  chanel.messages.push({
    type: "utilization",
    time: Date.now(),
    props: {
      name: "RAM",
      min: 0,
      max: 100,
      value: Math.random() * 100 < 10 ? null : Math.floor(Math.random() * 100),
      warning: 80,
      critical: 90,
    },
    nickname: "Server",
    message: "Utilization message... ",
  });
}, 10000);
</script>
<style lang="scss">
.messanger {
  background: var(--bg_100);
  width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 2px;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;

  &_nav {
    display: flex;
    width: 300px;
    min-width: 300px;
    gap: 2px;
    flex-direction: column;
    background: var(--bg_200);
  }
  &_chat {
    display: flex;
    gap: 2px;
    flex-direction: column;
    width: 300px;
  }
  &_charts {
    display: flex;
    gap: 2px;
    width: 300px;
    flex-direction: column;
  }
  &_md {
    display: flex;
    gap: 2px;
    flex: 1 1 auto;
    width: 300px;
    max-width: 100%;
    flex-direction: column;
  }
}
</style>
