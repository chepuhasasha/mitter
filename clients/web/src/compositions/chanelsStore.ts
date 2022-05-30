import { key, State } from "@/store";
import { IChanel } from "@/types/chanel";
import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";

export const ChanelsStore = (): {
  STORE: Store<State>;
  ACTIVE_CHANEL: ComputedRef<IChanel>;
  CHANELS: ComputedRef<IChanel[]>;
} => {
  const STORE = useStore(key);
  const ACTIVE_CHANEL = computed(() => STORE.getters.ACTIVE_CHANEL);
  const CHANELS = computed(() => STORE.getters.CHANELS);
  return {
    STORE,
    ACTIVE_CHANEL,
    CHANELS,
  };
};
