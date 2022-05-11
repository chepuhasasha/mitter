import { Module } from "vuex";
import { State } from "../index";

export interface IScreenState {
  screen: string;
}

export const screen: Module<IScreenState, State> = {
  state: {
    screen: "decktop",
  },
  getters: {
    SCREEN: (state) => state.screen,
  },
  mutations: {
    SET_SCREEN_MODE(state, size: number) {
      if (size <= 1000) {
        state.screen = "mobile";
      } else {
        state.screen = "decktop";
      }
    },
  },
  actions: {
    setScreenMode({ commit }, size: number) {
      commit("SET_SCREEN_MODE", size);
    },
  },
};
