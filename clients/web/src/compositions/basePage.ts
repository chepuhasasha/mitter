import { key, State } from "@/store";
import { IChanel } from "@/types/chanel";
import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";

export const BasePage = (): {
  STORE: Store<State>;
  SCREEN_MODE: ComputedRef<string>;
  LANG: ComputedRef<string>;
} => {
  const STORE = useStore(key);
  const SCREEN_MODE = computed(() => STORE.getters.SCREEN);
  const LANG = computed(() => STORE.getters.LANG);
  return {
    STORE,
    SCREEN_MODE,
    LANG,
  };
};
