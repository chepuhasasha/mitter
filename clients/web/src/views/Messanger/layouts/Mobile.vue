<template lang="pug">
.messanger(v-if='props.chanel')
  .messanger_nav
    .messanger_nav_header
      Icon(icon='left')
      h3 {{ props.chanel.name }}
      Icon(icon='settings')
    .messanger_nav_blocks
      Button(@click="activeBlock = 'LOG'" size='m' :active="activeBlock === 'LOG'") LOG
      Button(@click="activeBlock = 'CHARTS'" size='m' :active="activeBlock === 'CHARTS'") CHARTS
      Button(@click="activeBlock = 'MD'" size='m' :active="activeBlock === 'MD'") MD
  .messanger_block(v-show="activeBlock === 'LOG'")
    ChatBlock(:messages="props.chanel.messages")
  .messanger_block(v-show="activeBlock === 'CHARTS'")
    ChartsBlock(:messages="props.chanel.messages.filter(m => m.type === 'utilization')")
  .messanger_block(v-show="activeBlock === 'MD'")
    MDBlock(:messages="props.chanel.messages.filter(m => m.type === 'md')")
</template>

<script lang="ts" setup>
import type { IChanel } from "@/types/chanel";
import type { PropType } from "vue";
import { ref } from "vue";
import ChatBlock from "../blocks/ChatBlock.vue";
import ChartsBlock from "../blocks/ChartsBlock.vue";
import MDBlock from "../blocks/MDBlock.vue";

const props = defineProps({
  chanel: { type: Object as PropType<IChanel>, require: true },
});

const activeBlock = ref("LOG");
</script>
<style lang="scss" scoped>
.messanger {
  display: flex;
  flex-direction: column;
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
    width: 100%;
    // min-height: 200px;
    // max-height: 200px;
    padding: 40px 10px 10px 10px;
    background: var(--bg_200);
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
    width: 100%;
    height: calc(100% - 129px);
  }
}
</style>
