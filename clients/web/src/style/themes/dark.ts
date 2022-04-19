import { ITheme } from "./theme.interface";

const dark: ITheme = {
  // BACKGROUNDS
  // -- WRAPPERS
  bg_100: "#11121B",
  bg_200: "#171822",
  bg_300: "#1F212F",
  // -- INPUT
  input_bg: "#171822",
  input_hover_bg: "#1F212F",
  input_active_bg: "#615EFF",
  input_border: "2px solid #171822",
  // -- BUTTON
  btn_bg: "#171822",
  btn_hover_bg: "#8785ff",
  btn_active_bg: "#615EFF",
  btn_border: "2px solid #171822",
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
  warn_100: "rgba(255,228,60, 1)",
  warn_200: "rgba(255,228,60, 0.5)",
  warn_300: "rgba(255,228,60, 0.2)",
  // -- CRITICAL
  error_100: "rgba(255,79,15, 1)",
  error_200: "rgba(255,79,15, 0.5)",
  error_300: "rgba(255,79,15, 0.2)",
};

export default dark;
