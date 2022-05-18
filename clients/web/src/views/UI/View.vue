<template lang="pug">
.ui(
  v-grid
  v-grid-rows-template='"100px repeat(10, 1fr)"'
  v-width='"100vw"'
  v-height='"100vh"'
  v-gap='20'
  v-padding='20'
  v-y-overflow='"auto"'
  )
  Button(
    size='l'
    active
    icon='right'
    v-lang
    )
    |$uk SEND
    |$ru ОТПРАВИТЬ
  Input(v-model='input')
  Input(v-model='input' load)
  Input(v-model='input' icon='user')
  Input(v-model='input' icon='user')
    Icon(icon='ok')
  Input(v-model='input' icon='user' error='ERROR!')
  Code(edit lang='json' v-model='code' v-width='"300px"' v-height='"300px"')
  Loader(size='40px')
  Loader(size='40px' mode='ring')
  Utilization(edit)
  Icon(:icon='name' v-for='(icon, name) in getIcons')
  
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
