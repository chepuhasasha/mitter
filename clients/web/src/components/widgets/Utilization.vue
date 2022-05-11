<template lang="pug">
.utilization
  .utilization_name {{ name }}
  .utilization_val(:style='{color: getStyle.background }') {{ max / 100 * value }}%
  .utilization_scale
    .utilization_scale_limit(:style='{width: `${max / 100 * warning}%`, background: "var(--ok_100)"}')
    .utilization_scale_limit(:style='{width: `${max / 100 * (critical - warning)}%`, background: "var(--warn_100)"}')
    .utilization_scale_limit(:style='{width: `${max / 100 * (max - critical)}%`, background: "var(--error_100)"}')
  .utilization_value(:style='getStyle')
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Utilization",
  props: {
    name: {
      type: String as PropType<string>,
      default: "Name",
    },
    min: {
      type: Number as PropType<number>,
      default: 0,
    },
    max: {
      type: Number as PropType<number>,
      default: 100,
    },
    value: {
      type: Number as PropType<number>,
      default: 30,
    },
    warning: {
      type: Number as PropType<number>,
      default: 80,
    },
    critical: {
      type: Number as PropType<number>,
      default: 90,
    },
  },
  setup(props) {
    const getStyle = computed(() => {
      const width = (props.max / 100) * props.value;
      let background = "var(--ok_100)";
      if (props.value >= props.warning) {
        background = "var(--warn_100)";
      }
      if (props.value >= props.critical) {
        background = "var(--error_100)";
      }
      return {
        width: width <= 100 ? `${width}%` : "100%",
        background,
      };
    });
    return {
      getStyle,
    };
  },
});
</script>
<style lang="less">
.utilization {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;

  &_name {
    font-size: 14px;
  }
  &_val {
    font-size: 14px;
  }
  &_scale {
    display: flex;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    &_limit {
      height: 2px;
    }
  }

  &_value {
    height: 10px;
    width: 30%;
    border-radius: 2px;
  }
}
</style>

