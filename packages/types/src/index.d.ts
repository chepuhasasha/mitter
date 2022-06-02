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
  | "json";
export interface IMessage {
  id: MessageNameType;
  type: string;
  text: string;
  time: number;
  nickname: string;
}
export interface IUtilizationMessage extends IMessage {
  props: {
    value: number;
    max: number;
    warning: number;
    critical: number;
  };
}
export interface ICodeMessage extends IMessage {
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
  messages: [IMessage | IUtilizationMessage | ICodeMessage];
}
