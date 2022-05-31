<template lang="pug">
.messanger
  //- .messanger_nav
  //-   h3 USER
  //-   h3 CHANELS BLOCK
  .messanger_chanels
    ChanelsBlock
  .messanger_chat(:style="{width: `${chatWidth}px`}")
    ChatBlock
  WidthLimiter(v-model="chatWidth" :min='400' :max='700')
  .messanger_charts(:style="{width: `${chartWidth}px`}")
    ChartsBlock
  WidthLimiter(v-model="chartWidth" :min='300' :max='500')
  .messanger_md
    MDBlock
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ChanelsStore } from "@/compositions/chanelsStore";
import ChatBlock from "../blocks/ChatBlock.vue";
import ChartsBlock from "../blocks/ChartsBlock.vue";
import MDBlock from "../blocks/MDBlock.vue";
import ChanelsBlock from "../blocks/ChanelsBlock.vue";

const { ACTIVE_CHANEL } = ChanelsStore();
const chatWidth = ref(600);
const chartWidth = ref(400);
</script>
<style lang="scss" scoped>
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
    max-width: 300px;
    gap: 2px;
    flex-direction: column;
    background: var(--bg_200);
  }
  &_chanels {
    display: flex;
    gap: 2px;
    min-width: 300px;
    max-width: 300px;
    flex-direction: column;
    width: 300px;
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
