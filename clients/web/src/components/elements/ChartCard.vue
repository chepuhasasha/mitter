<template lang="pug">
.chart(@click="isOpen = true")
  Utilization(v-if='last' v-bind='last.props')
  Chart(
    :warning='warning'
    :critical='critical'
    :last='last'
    :labels='labels'
    :data='data'
  )

teleport(to='body')
  Modal(v-model="isOpen" title='metrica')
    .chart_modal
      //-   span(v-for="(msg, i) in labels" :key="i") {{ msg }}
      Utilization(v-if='last' v-bind='last.props')
      .chart_modal_chart
        Chart(
          :warning='warning'
          :critical='critical'
          :last='last'
          :labels='labels'
          :data='data'
          :width='800'
          :height='400'
        )
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { IMessage } from "@/types/message";
import type { PropType } from "vue";

const props = defineProps({
  name: { type: String as PropType<string>, require: true },
  warning: { type: Number as PropType<number>, require: true },
  critical: { type: Number as PropType<number>, require: true },
  last: { type: Object as PropType<IMessage>, require: true },
  labels: { type: Array as PropType<string[]>, require: true },
  data: { type: Array as PropType<number[]>, require: true },
});

const isOpen = ref(false);
</script>
<style lang="scss">
.chart {
  cursor: pointer;
  border-bottom: 2px solid var(--bg_100);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  &:hover {
    background: var(--bg_100);
  }
  &_modal {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 100%;
    &_messages {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 100%;
      height: 100%;
      overflow-y: auto;
    }
    &_chart {
      display: flex;
    }
    // flex-direction: column;
  }
}
</style>
