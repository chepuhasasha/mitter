export interface IMessage {
  type: string;
  message: string;
  time: number;
  nickname: string;
  isEvent?: boolean;
  props?: Record<string, unknown>;
}
