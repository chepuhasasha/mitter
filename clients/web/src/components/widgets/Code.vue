<template lang="pug">
.code.highlight(mode='c1' width='fill' col padding='10px' :gap='10' yOverflow='auto')
  pre(v-html='hljsParse')
  textarea(v-if='edit' :value='modelValue ? modelValue : value' @input='input')
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  reactive,
  toRefs,
  watch,
} from "vue";
import hljs from "highlight.js";

export default defineComponent({
  name: "Code",
  props: {
    modelValue: {
      type: [String, Object, Array, Number, Boolean] as PropType<string | null>,
      default: null,
    },
    edit: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    value: {
      type: String as PropType<string | null>,
      default: null,
    },
    lang: {
      type: String as PropType<string>,
      default: "json",
    },
  },
  emits: ["update:modelValue", "update"],
  setup(props, { emit }) {
    const state = reactive({
      hljsParse: null as string | null,
      err: null as number | null,
      lineErr: null as number | null,
    });

    const input = (e: { target: { value: string } }) => {
      const value = e.target.value;
      emit("update:modelValue", value);
      emit("update", value);
    };

    const check = (data: string): null | number => {
      try {
        JSON.parse(data);
        state.err = null;
        state.lineErr = null;
        return null;
      } catch (e) {
        const messageWords = e.message.split(" ");
        // последний символ - индекс ошибки
        state.err = messageWords[messageWords.length - 1];
        let counter = 1;
        let line = 0;
        data.split("\n").forEach((el, i) => {
          counter += el.length;
          if (state.err && !line && counter >= state.err) {
            line = i;
          }
        });
        state.lineErr = line;
        return line;
      }
    };

    const highlight = (data: string) => {
      let source = data;
      if (typeof data != "string") {
        source = JSON.stringify(data);
      }
      switch (props.lang) {
        case "json":
          state.hljsParse = hljs
            .highlight(source, {
              language: "json",
            })
            .value.split("\n")
            .reduce((accum, val, i) => {
              if (check(source) === i) {
                return (
                  accum +
                  `<span class="err"><span class="linenum">${i}</span>${val}</span>\n`
                );
              } else {
                return accum + `<span class="linenum">${i}</span>${val}\n`;
              }
            }, "");
          break;
        case "markdown":
          state.hljsParse = hljs
            .highlight(source, {
              language: "markdown",
            })
            .value.split("\n")
            .reduce((accum, val, i) => {
              return accum + `<span class="linenum">${i}</span>${val}\n`;
            }, "");
          break;

        default:
          break;
      }
    };

    watch(
      () => props.modelValue,
      (n) => {
        if (n) {
          highlight(n);
        }
      }
    );
    watch(
      () => props.value,
      (n) => {
        if (n) {
          highlight(n);
        }
      }
    );

    onMounted(() => {
      if (props.modelValue) {
        let source = props.modelValue;
        if (typeof source != "string" && props.lang === "json") {
          source = JSON.stringify(props.modelValue, null, 2);
        }
        highlight(source);
      } else if (props.value) {
        highlight(props.value);
      }
    });

    return {
      input,
      ...toRefs(state),
    };
  },
});
</script>
<style lang="less" scoped>
.code {
  position: relative;
  padding: 10px;
  display: flex;
  width: 100%;
  height: 500px;
  background: var(--bg_100);
  border-radius: 10px;
  overflow-y: auto;
}
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
</style>

