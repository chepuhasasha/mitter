import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { IScreenState, screen } from "./modules/screen";
import { theme, IThemeState } from "./modules/theme";

export interface State {
  theme: IThemeState;
  screen: IScreenState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    theme,
    screen,
  },
});
