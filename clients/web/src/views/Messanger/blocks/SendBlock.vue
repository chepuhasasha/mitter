<template lang="pug">
.send
  .send_type(v-show='sendOpen')
    Button(size='s' @click="selectType('info')" :active='selectedType ==="info"') INFO
    Button(size='s' @click="selectType('warn')" :active='selectedType === "warn"') WARN
    Button(size='s' @click="selectType('error')" :active='selectedType === "error"') ERROR
    Button(size='s' @click="selectType('md')" :active='selectedType ==="md"') MD
    Button(size='s' @click="selectType('json')" :active='selectedType === "json"') JSON
    Button(size='s' @click="selectType('utilization')" :active='selectedType === "utilization"') UTILIZATION
  .send_inputs
    Input(placeholder='message' v-model="newMessage")
  .send_inputs(v-if='multyInputsMap[selectedType]')
    Input(
      :placeholder='key'
      :type='multyInputsMap[selectedType][key].type'
      v-for="(val, key) in multyInputsMap[selectedType]"
      v-model="multyInputsMap[selectedType][key].value"  
    )
  .send_widget_wrapper(v-if='widgetsMap[selectedType]')
    component.send_widget(
      :is="widgetsMap[selectedType].widget"
      v-model='widgetsMap[selectedType].value'
      v-bind='widgetsMap[selectedType].props'
    ) 
  //- Input(placeholder='message' @focus="sendToggle")
  transition(name='slide-fade')
    Button.send_btn(v-if='validate' size='l' active @click="send") SEND
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

const sendOpen = ref(true);
const selectedType = ref<string>("info");
const newMessage = ref<string | null>(null);
const sendToggle = (e) => {
  sendOpen.value = e;
};
const selectType = (type: string) => {
  selectedType.value = type;
};
const multyInputsMap = ref<{
  [key: string]: {
    [key: string]: { type: string; value: null | string | number };
  };
}>({
  utilization: {
    value: { type: "number", value: null },
    min: { type: "number", value: null },
    max: { type: "number", value: null },
    warning: { type: "number", value: null },
    critical: { type: "number", value: null },
  },
});
const widgetsMap = ref<{
  [key: string]: {
    widget: string;
    props: Record<string, unknown>;
    value: string | null | number;
  };
}>({
  json: {
    widget: "Code",
    props: {
      edit: true,
      lang: "json",
    },
    value: "",
  },
  md: {
    widget: "Code",
    props: {
      edit: true,
      lang: "markdown",
    },
    value: "",
  },
});
const validate = computed(() => {
  let flag = newMessage.value != null;
  if (multyInputsMap.value[selectedType.value]) {
    Object.keys(multyInputsMap.value[selectedType.value]).forEach((key) => {
      if (
        multyInputsMap.value[selectedType.value][key].value === null ||
        multyInputsMap.value[selectedType.value][key].value === ""
      ) {
        flag = false;
      }
    });
  }
  // if (widgetsMap.value[selectedType.value]) {
  //   console.log(widgetsMap.value[selectedType.value]);
  //   return;
  // }
  return flag;
});
const send = () => {
  if (multyInputsMap.value[selectedType.value]) {
    console.log(multyInputsMap.value[selectedType.value]);
    return;
  }
  if (widgetsMap.value[selectedType.value]) {
    console.log(widgetsMap.value[selectedType.value]);
    return;
  }
};
</script>
<style lang="scss">
.send {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  flex-direction: column;
  background: var(--bg_100);
  border-top: 2px solid var(--bg_300);
  &_type {
    display: flex;
    gap: 10px;
    padding: 0 20px;
    overflow-x: auto;
    height: max-content;
    flex: 0 0 auto;
    min-height: max-content;
    &::-webkit-scrollbar {
      height: 0px;
    }
  }
  &_inputs {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &_widget {
    max-height: 30vh;
    &_wrapper {
      padding: 0 20px;
    }
  }
  &_btn {
    margin: 0 20px;
    width: calc(100% - 40px);
  }
}
</style>

