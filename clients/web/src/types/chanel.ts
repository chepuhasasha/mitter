import { IMessage } from "./message";

export interface IChanel {
  id: string;
  name: string;
  messages: IMessage[];
}
