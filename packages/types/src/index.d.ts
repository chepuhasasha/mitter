export interface IUser {
  id: string;
  name: string;
  email: string;
  hash: string;
}
export declare type MessageNameType =
  | "info"
  | "ok"
  | "warn"
  | "error"
  | "md"
  | "json"
  | "utilization";
export interface IMessage {
  id: string;
  type: "info" | "ok" | "warn" | "error";
  text: string;
  time: number;
  nickname: string;
  props?: null;
}
export interface IUtilizationMessage {
  id: string;
  type: "utilization";
  text: string;
  time: number;
  nickname: string;
  props: {
    value: number;
    max: number;
    warning: number;
    critical: number;
  };
}
export interface ICodeMessage {
  id: string;
  type: "md" | "json";
  text: string;
  time: number;
  nickname: string;
  props: {
    code: string;
  };
}
export interface IRoom {
  id: string;
  owner_id: string;
  name: string;
  limit: number;
  keys: {
    name: string;
    hash: string;
  }[];
  messages: (IMessage | IUtilizationMessage | ICodeMessage)[];
}
