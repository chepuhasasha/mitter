import { Module } from "vuex";
import { ITheme } from "@/style/themes/theme.interface";
import { ThemeName } from "@/style/themes";
import { themes } from "@/style/themes/index";
import { State } from "../index";

export interface IThemeState {
  theme: string | null;
  name: ThemeName;
}

export const theme: Module<IThemeState, State> = {
  state: {
    theme: null,
    name: "dark",
  },
  getters: {
    THEME: (state) => state.theme,
  },
  mutations: {
    SET_THEME(state, name: ThemeName) {
      let result = ":root { ";
      Object.keys(themes[name]).forEach((key) => {
        result += `--${key}: ${themes[name][key as keyof ITheme]};`;
      });
      result + " }";
      state.theme = result;
      state.name = name;
    },
  },
  actions: {
    setTheme({ commit }, name: ThemeName) {
      commit("SET_THEME", name);
    },
  },
};
