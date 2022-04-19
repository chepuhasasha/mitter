<template lang="pug">
Page
  h3 Loader.vue
  flex.ui_group(gap='20px' padding='20px' yAlign='center')
    Loader
    Loader(mode='ring' width='40px')
  h3 Button.vue
  flex.ui_group(gap='20px' padding='20px' yAlign='center')
    Button(title='Button') Button
    Button(active title='Active') Active
    Button(disable title='Disable') Disable
    Button(icon='play' title='Icon') Icon
    Button(load title='Load') Load
    Button(size='xs') xs
    Button(size='s') s
    Button(size='m') m
    Button(size='l') l
    Button(size='xl') xl
  h3 Input.vue
  flex.ui_group(gap='20px' padding='20px')
    Input(title='Input' v-model='input' placeholder='input')
    Input(icon='sandwich-bar' title='Input' v-model='input' placeholder='icon')
    Input(load v-model='input' placeholder='load')
  h3 Icon.vue
  flex.ui_group(gap='10px' padding='20px' col)
    flex(
      v-for='(i,icon) in getIcons'
      gap='10px'
      yAlign='center')
      Icon(:icon='icon' :size='14')
      span {{ icon }}

</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import Loader from "@/components/widgets/Loader.vue";
import Icon from "@/components/widgets/Icon.vue";
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";
import { icons } from "@/components/widgets/icons.ts";
import Page from "@/components/templates/Page.vue";

export default defineComponent({
  name: "UI",
  components: {
    Page,
    Loader,
    Icon,
    Button,
    Input,
  },
  setup() {
    const state = reactive({
      input: null,
    });
    const getIcons = computed(() => icons.icons);

    return {
      getIcons,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less">
.ui {
  background: var(--bg_100);
  &_group {
    border: 2px dashed var(--bg_300);
    border-radius: 20px;
  }
}
</style>

function reactive(arg0: { input: null; }) { throw new Error("Function not
implemented."); }

