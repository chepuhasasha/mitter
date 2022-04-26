import { key } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";

export const PageInit = () => {
  const store = useStore(key);
  const screenMode = computed(() => store.getters.SCREEN);
  return {
    store,
    screenMode,
  };
};
