import { ITheme } from "./theme.interface";

const dark: ITheme = {
  // BACKGROUNDS
  // -- WRAPPERS
  bg_100: "#171822",
  bg_200: "#11121B",
  bg_300: "#171822",
  // -- INPUT
  input_bg: "#171822",
  input_hover_bg: "#8785ff",
  input_active_bg: "#615EFF",
  // -- BUTTON
  btn_bg: "#171822",
  btn_hover_bg: "#8785ff",
  btn_active_bg: "#615EFF",
  // -- SCROLL
  scroll: "#171822",
  scroll_thumb: "#615EFF",

  // TEXT
  // -- FONTS
  font_100: "Inter",
  font_200: "IBM Plex Mono",
  // -- COLORS
  text_100: "rgba(255,255,255,0.8)",
  text_200: "rgba(255,255,255,0.6)",
  text_300: "rgba(255,255,255,0.4)",

  // UX STATUSES
  // -- OK
  ok_100: "rgba(144,238,144, 1)",
  ok_200: "rgba(144,238,144, 0.5)",
  ok_300: "rgba(144,238,144, 0.2)",
  // -- WARNING
  warning_100: "rgba(255,228,60, 1)",
  warning_200: "rgba(255,228,60, 0.5)",
  warning_300: "rgba(255,228,60, 0.2)",
  // -- CRITICAL
  critical_100: "rgba(255,79,15, 1)",
  critical_200: "rgba(255,79,15, 0.5)",
  critical_300: "rgba(255,79,15, 0.2)",
};

export default dark;

