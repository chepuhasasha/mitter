import { IChanel } from "@/types/chanel";
import { Module } from "vuex";
import { State } from "../index";

export interface IChanelsState {
  chanels: IChanel[];
  activeChanel: IChanel | null;
}

export const chanels: Module<IChanelsState, State> = {
  state: {
    chanels: [],
    activeChanel: null,
  },
  getters: {
    CHANELS: (state) => state.chanels,
    ACTIVE_CHANEL: (state) => state.activeChanel,
  },
  mutations: {
    SET_CHANELS(state, chanels: IChanel[]) {
      state.chanels = chanels;
    },
    SET_ACTIVE_CHANELS(state, chanel: IChanel) {
      state.activeChanel = chanel;
    },
  },
  actions: {
    setChanels({ commit }, chanels: string) {
      commit("SET_CHANELS", chanels);
    },
    setActiveChanel({ commit }, chanel: IChanel | null) {
      commit("SET_ACTIVE_CHANELS", chanel);
    },
  },
};
