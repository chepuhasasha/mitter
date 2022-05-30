<template lang="pug">
Decktop(v-if='SCREEN_MODE === "decktop"')
Tablet(v-if='SCREEN_MODE === "tablet"')
Mobile(v-if='SCREEN_MODE === "mobile"')
</template>

<script lang="ts" setup>
import { BasePage } from "@/compositions/basePage";
import Decktop from "./layouts/Decktop.vue";
import Mobile from "./layouts/Mobile.vue";
import Tablet from "./layouts/Tablet.vue";
import chanelsData from "./chanels.json";

const { STORE, SCREEN_MODE } = BasePage();
STORE.dispatch("setActiveChanel", chanelsData[0]);
STORE.dispatch("setChanels", chanelsData);
</script>
<style lang="scss"></style>
