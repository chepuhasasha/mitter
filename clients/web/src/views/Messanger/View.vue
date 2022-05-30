<template lang="pug">
Decktop(v-if='SCREEN_MODE === "decktop"' :chanel='chanel')
Mobile(v-if='SCREEN_MODE === "mobile"' :chanel='chanel')
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { BasePage } from "@/compositions/basePage";
import Decktop from "./layouts/Decktop.vue";
import Mobile from "./layouts/Mobile.vue";
import data from "./data.json";

const chanel = computed(() => {
  return data;
});

const { STORE, SCREEN_MODE } = BasePage();
</script>
<style lang="scss"></style>
