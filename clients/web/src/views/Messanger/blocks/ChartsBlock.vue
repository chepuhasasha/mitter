<template lang="pug">
.charts_list
  ChartCard(v-for='(chart, name) in charts' v-bind='chart' :name='name')
</template>
<script lang="ts" setup>
import type { IMessage } from "@/types/message";
import { computed } from "vue";
import { ChanelsStore } from "@/compositions/chanelsStore";

const { ACTIVE_CHANEL } = ChanelsStore();
interface IMetrica {
  last?: IMessage;
  warning: number;
  critical: number;
  labels: string[];
  data: number[];
}

const charts = computed(() => {
  const charts: Record<string, IMetrica> = {};
  if (ACTIVE_CHANEL.value) {
    const messages = ACTIVE_CHANEL.value.messages.filter(
      (m) => m.type === "utilization"
    );
    messages.forEach((msg) => {
      if (!charts[msg.props?.name]) {
        charts[msg.props?.name] = {
          data: messages
            .filter((m) => m.props?.name === msg.props?.name)
            .map((m) => (m.props ? m.props.value : 0)),
          labels: messages
            .filter((m) => m.props?.name === msg.props?.name)
            .map((m) => (m.props ? m.message : "")),
          warning: msg.props ? msg.props.warning : 0,
          critical: msg.props ? msg.props.critical : 0,
        };
      }
      if (charts[msg.props?.name]) {
        charts[msg.props?.name].last = msg;
      }
    });
  }
  return charts;
});
</script>
<style lang="scss">
.charts {
  &_filters {
    padding: 10px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 1px;
    background: var(--bg_200);
  }
  &_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    // padding: 10px;
    overflow-y: auto;
    background: var(--bg_200);
    height: 100%;
  }
}
</style>
