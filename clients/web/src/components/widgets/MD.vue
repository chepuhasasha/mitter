<template lang="pug">
.markdown(v-html='html')
</template>

<script lang="ts" setup>
import markdownit from "markdown-it";
import emoji from "markdown-it-emoji";
import hljs from "highlight.js";
import { computed } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  code: { type: String as PropType<string>, default: "" },
});

const md = new markdownit({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (e) {
        console.log(e);
      }
    }
    return "";
  },
});
md.use(emoji);

const html = computed(() => {
  return md.render(props.code);
});
</script>
<style lang="scss">
.markdown {
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-weight: 300;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }
  // padding: 10px;

  // background: var(--bg_200);
  // border: 2px solid var(--bg_300);
  // border-radius: 10px;
}
</style>
