<template lang="pug">
.chanels_list(v-if='CHANELS')
  Chanel(v-for='chanel in CHANELS' :chanel='chanel')
</template>
<script lang="ts" setup>
import { ChanelsStore } from "@/compositions/chanelsStore";
const { CHANELS } = ChanelsStore();
</script>
<style lang="scss">
.chanels {
  &_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    overflow-y: auto;
    background: var(--bg_200);
    height: 100%;
  }
}
</style>
