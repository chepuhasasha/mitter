<template lang="pug">
.ui(
  v-grid
  v-grid-rows-template='"100px repeat(10, 1fr)"'
  v-width='"100vw"'
  v-height='"100vh"'
  v-gap='20'
  v-padding='20'
  )
  Button(
    size='l'
    active
    icon='right'
    v-lang='LANG'
    )
    |$en SEND
    |$ru ОТПРАВИТЬ
    span(v-lang='LANG')
      |$en tets
      |$ru тест
      span(v-lang='LANG')
        |$en tets2
        |$ru тест2
  Code(edit lang='markdown' v-model='code' v-width='"300px"' v-height='"300px"')
  Loader(size='40px')
  Loader(size='40px' mode='ring')
  //- Flex(gap='20px')
  //-   Button(icon='error') ldldldl
  //-   Button(active) active
  //-   Button(size='m') active
  //-   Button(icon='error' size='l' load active) SEND
  //- Input(v-model='input')
  Utilization(edit)
  //- Flex(gap='10px')
  //- Icon(:icon='name' v-for='(icon, name) in getIcons')
  
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import { icons } from "@/components/interfaces/icons";
import { BasePage } from "@/compositions/basePage";

export default defineComponent({
  name: "UI",
  setup() {
    const { LANG, SCREEN_MODE, STORE } = BasePage();
    const state = reactive({
      input: null,
      code: '{\n  "test": 123\n}',
    });
    const getIcons = computed(() => icons);

    return {
      getIcons,
      ...toRefs(state),
      LANG,
      SCREEN_MODE,
      STORE,
    };
  },
});
</script>

<style lang="less">
.ui {
  background: var(--bg_200);
  // width: 100vw;
  // height: 100vh;
  // gap: 20px;
  // padding: 20px;
  // display: flex;
  // flex-direction: column;
}
</style>

