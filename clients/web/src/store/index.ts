import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { IScreenState, screen } from "./modules/screen";
import { lang, ILangState } from "./modules/lang";
import { theme, IThemeState } from "./modules/theme";
import { chanels, IChanelsState } from "./modules/chanels";

export interface State {
  theme: IThemeState;
  screen: IScreenState;
  lang: ILangState;
  chanels: IChanelsState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    theme,
    screen,
    lang,
    chanels,
  },
});
