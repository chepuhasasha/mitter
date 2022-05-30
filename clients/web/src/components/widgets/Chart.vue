<template lang="pug">
canvas(ref='cvs' :height='height' :width='width')
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { Chart, registerables } from "chart.js";
import type { PropType } from "vue";

const props = defineProps({
  warning: { type: Number as PropType<number>, require: true },
  critical: { type: Number as PropType<number>, require: true },
  labels: { type: Array as PropType<string[]>, require: true },
  data: { type: Array as PropType<number[]>, require: true },
  width: { type: Number as PropType<number>, default: 0 },
  height: { type: Number as PropType<number>, default: 0 },
});

Chart.register(...registerables);

const cvs = ref<HTMLCanvasElement>();

let chart: Chart | null = null;

const updateData = () => {
  if (chart) {
    chart.data.labels = props.labels;
    chart.data.datasets.forEach((dataset) => {
      dataset.data = props.data ? props.data : [];
    });
    chart.update();
  }
};
watch(
  () => props.data,
  () => {
    updateData();
  }
);

onMounted(() => {
  if (cvs.value) {
    const ctx = cvs.value.getContext("2d");
    chart = new Chart(cvs.value, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Chart",
            data: [],
            fill: true,
            borderColor: "red",
            borderWidth: 2,
            pointRadius: 2,
            pointBorderColor: "rgba(255,255,255,0.1)",
            pointBackgroundColor: "#11121B",
            tension: 0.2,
            segment: {
              borderColor: (ctx) => {
                if (props.data[ctx.p1DataIndex]) {
                  if (props.data[ctx.p1DataIndex] >= props.critical) {
                    return "red";
                  }
                  if (props.data[ctx.p1DataIndex] >= props.warning) {
                    return "yellow";
                  }
                  return "lightgreen";
                }
              },
            },
          },
        ],
      },
      options: {
        layout: {
          padding: 0,
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: true,
              color: (ctx) => {
                if (ctx.tick.value >= props.critical) {
                  return "rgba(255,0,0,0.5)";
                }
                if (ctx.tick.value >= props.warning) {
                  return "rgba(255,255,0,0.5)";
                }
                return "rgba(255,255,255,0.05)";
              },
              // offset: false,
              borderDash: [2, 2],
            },
          },
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: true,
              color: "rgba(255,255,255,0.05)",
            },
          },
        },
      },
    });
    updateData();
  }
});
</script>
