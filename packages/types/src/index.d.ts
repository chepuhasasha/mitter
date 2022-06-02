// COMMON TYPES
export declare type MessageNameType =
  | "info"
  | "ok"
  | "warn"
  | "error"
  | "md"
  | "json"
  | "utilization";

export interface UtilizationProps {
  name: string;
  value: number;
  max: number;
  warning: number;
  critical: number;
}
export interface CodeProps {
  code: string;
}

// CLIENT TYPES
// MESSAGES
export interface ClientSimpleMessage {
  type: "ok" | "info" | "warn" | "error";
  nickname: string;
  text: string;
}
export interface ClientCodeMessage {
  type: "md" | "json";
  nickname: string;
  text: string;
  props: {
    code: string;
  };
}
export interface ClientUtilizationMessage {
  type: "utilization";
  nickname: string;
  text: string;
  props: UtilizationProps;
}

export declare type ClientMessage =
  | ClientSimpleMessage
  | ClientCodeMessage
  | ClientUtilizationMessage;

// ROOM
export interface CreateRoom {
  owner_id: string;
  name: string;
}

// SERVER TYPES
// MESSAGES
export interface ServerSimpleMessage {
  id: string;
  time: number;
  type: "ok" | "info" | "warn" | "error";
  nickname: string;
  text: string;
}
export interface ServerCodeMessage {
  id: string;
  time: number;
  type: "md" | "json";
  nickname: string;
  text: string;
  props: {
    code: string;
  };
}
export interface ServerUtilizationMessage {
  id: string;
  time: number;
  type: "utilization";
  nickname: string;
  text: string;
  props: UtilizationProps;
}

export declare type ServerMessage =
  | ServerSimpleMessage
  | ServerCodeMessage
  | ServerUtilizationMessage;

//  ROOM
export interface ServerRoom {
  id: string;
  owner_id: string;
  name: string;
  limit: number;
  keys: {
    name: string;
    hash: string;
  }[];
  messages: ServerMessage[];
}
