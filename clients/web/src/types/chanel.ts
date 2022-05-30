import { IMessage } from "./message";

export interface IChanel {
  id: string;
  title: string;
  last: string | null;
  messages: IMessage[];
}
