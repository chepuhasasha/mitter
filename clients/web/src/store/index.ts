import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { theme, IThemeState } from "./modules/theme";

export interface State {
  theme: IThemeState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    theme,
  },
});
