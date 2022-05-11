import { key, State } from "@/store";
import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";

export const BasePage = (): {
  store: Store<State>;
  SCREEN_MODE: ComputedRef<string>;
  LANG: ComputedRef<string>;
} => {
  const store = useStore(key);
  const SCREEN_MODE = computed(() => store.getters.SCREEN);
  const LANG = computed(() => store.getters.LANG);
  return {
    store,
    SCREEN_MODE,
    LANG,
  };
};
