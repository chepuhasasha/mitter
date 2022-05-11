<template lang="pug">
.ui
  h3 Loader
  Loader
  Loader(mode='ring')
  h3 Button
  Flex(gap='20px')
    Button(icon='error') ldldldl
    Button(active) active
    Button(size='m') active
    Button(icon='error' size='l' load active) SEND
  Input(v-model='input')
  h3 Icon
  Flex(v-for='(icon, name) in getIcons' padding='5px' gap='5px' yAlign='center')
    Icon(:icon='name')
    span {{ name }}
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { icons } from "@/components/interfaces/icons";

export default defineComponent({
  name: "UI",
  setup() {
    const state = reactive({
      input: null,
    });
    const getIcons = computed(() => icons);

    return {
      getIcons,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less">
.ui {
  background: var(--bg_200);
  width: 100vw;
  height: 100vh;
}
</style>

