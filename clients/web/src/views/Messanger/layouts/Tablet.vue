<template lang="pug">
.messanger
  .messanger_nav
    .messanger_nav_blocks
      Button(@click="activeBlock = 'LOG'" size='m' :active="activeBlock === 'LOG'") LOG
      Button(@click="activeBlock = 'CHARTS'" size='m' :active="activeBlock === 'CHARTS'") CHARTS
      Button(@click="activeBlock = 'MD'" size='m' :active="activeBlock === 'MD'") MD
    ChanelsBlock
  .messanger_block(v-show="activeBlock === 'LOG'")
    ChatBlock
  .messanger_block(v-show="activeBlock === 'CHARTS'")
    ChartsBlock
  .messanger_block(v-show="activeBlock === 'MD'")
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
const activeBlock = ref("LOG");
</script>
<style lang="scss" scoped>
.messanger {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  gap: 2px;
  background: var(--bg_100);

  &_nav {
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 300px;
    // min-height: 200px;
    // max-height: 200px;
    padding: 10px 10px 10px 10px;
    background: var(--bg_100);
    &_header {
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      justify-content: space-between;
    }
    &_blocks {
      display: flex;
      gap: 10px;
    }
  }
  &_block {
    display: flex;
    gap: 2px;
    flex-direction: column;
    // width: 100%;
    width: calc(100% - 302px);
  }
}
</style>
