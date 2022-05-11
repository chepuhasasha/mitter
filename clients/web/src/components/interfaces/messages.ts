import { IconName } from "./icons";

export type MessageTypeName =
  | "info"
  | "ok"
  | "warn"
  | "error"
  | "json"
  | "utilization"
  | "markdown";

export type MessageTypes = {
  [K in MessageTypeName]: {
    icon: IconName;
    color: string;
  };
};

export const messageTypes: MessageTypes = {
  info: {
    icon: "info",
    color: "",
  },
  ok: {
    icon: "ok",
    color: "",
  },
  warn: {
    icon: "warn",
    color: "",
  },
  error: {
    icon: "error",
    color: "",
  },
  json: {
    icon: "json",
    color: "",
  },
  utilization: {
    icon: "metric",
    color: "",
  },
  markdown: {
    icon: "md",
    color: "",
  },
};
