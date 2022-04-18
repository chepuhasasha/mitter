<template lang="pug">
flex.ui(width='100%' height='100%' gap='20px' padding='20px' col)
  h3 Loader.vue
  flex.ui_group(gap='20px' padding='20px' yAlign='center')
    Loader
    Loader(mode='ring' width='40px')
  h3 Button.vue
  flex.ui_group(gap='20px' padding='20px')
    Button Button
    Button(active) Active
    Button(disable) Disable
    Button(icon='play') Icon
    Button(load) Load
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
import { computed, defineComponent } from "vue";
import Loader from "@/components/widgets/Loader.vue";
import Icon from "@/components/widgets/Icon.vue";
import Button from "@/components/ui/Button.vue";
import { icons } from "@/components/widgets/icons.ts";

export default defineComponent({
  name: "UI",
  components: {
    Loader,
    Icon,
    Button,
  },
  setup() {
    const getIcons = computed(() => icons.icons);

    return {
      getIcons,
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
