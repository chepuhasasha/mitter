// COMPLETE: [Code.vue]
<template lang="pug">
.code.highlight(
  v-flex
  v-col
  v-padding='10'
  v-gap='10'
  v-height='"100%"'
  v-width='"100%"'
  v-y-overflow='"auto"'
  )
  pre(v-html='highlight')
  textarea(
    :rows='rows'
    :title='error'
    v-if='edit'
    :value='modelValue'
    @input='$emit("update:modelValue", $event.target?.value)'
    )
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { PropType } from "vue";
import hljs from "highlight.js";

const props = defineProps({
  modelValue: { type: String as PropType<string>, default: "" },
  edit: { type: Boolean as PropType<boolean>, default: false },
  lang: { type: String as PropType<string>, default: "json" },
});

const error = ref("");

const check = (data: string): null | number => {
  switch (props.lang) {
    case "json":
      try {
        JSON.parse(data);
        error.value = "";
        return null;
      } catch (e) {
        error.value = e.message;
        let counter = 1;
        let line = 0;
        data.split("\n").forEach((el, i) => {
          counter += el.length;
          let messageWords = e.message.split(" ");
          if (!line && counter >= messageWords[messageWords.length - 1]) {
            line = i;
          }
        });
        return line;
      }

    default:
      return null;
  }
};

const highlight = computed(() => {
  return hljs
    .highlight(props.modelValue, { language: props.lang })
    .value.split("\n")
    .reduce((accum, val, i) => {
      if (check(props.modelValue) === i) {
        return (
          accum +
          `<span class="err"><span class="linenum">${i}</span>${val}</span>\n`
        );
      } else {
        return accum + `<span class="linenum">${i}</span>${val}\n`;
      }
    }, "");
});

const rows = computed(() => {
  return highlight.value.split("\n").length - 1;
});
</script>
<style lang="less">
.code {
  background: var(--bg_100);
  border-radius: 10px;
  pre {
    background: none;
    padding: 0;
  }
  textarea {
    position: absolute;
    color: transparent;
    top: 0;
    left: 0;
    caret-color: white;
    padding: 10px;
    padding-left: 70px;
  }
}
</style>
