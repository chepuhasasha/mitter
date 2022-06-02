import Logger from "./services/logger.service";
import { io, Socket } from "socket.io-client";
import chalk from "chalk";
import { MessageNameType } from "@mitter/types/src";

export interface IUtilizationProps {
  value: number;
  max: number;
  warning: number;
  critical: number;
}
export default class Mitter {
  nickname: string;
  host: string;
  socket: Socket;
  logger: Logger;
  constructor({
    token,
    nickname,
    host = "ws://localhost:3000",
  }: {
    token: string;
    nickname: string;
    host?: string;
  }) {
    this.nickname = nickname;
    this.host = host;
    this.logger = new Logger();
    this.socket = io(this.host, {
      auth: {
        token,
      },
    });
    this.socket.on("connect", () => {
      this.logger.log({
        type: "ok",
        text: `Host: ${chalk.cyan(this.host)} - connected.`,
        nickname: "Mitter",
      });
    });
    this.socket.once("room_connected", (data) => {});
    this.socket.on("disconnect", () => {});
    this.socket.on("connect_error", () => {});
    this.socket.on("error", (error: string) => {
      this.logger.log({
        type: "error",
        text: error,
        nickname: "Mitter",
      });
    });

    return this;
  }
  emit(
    type: "ok" | "info" | "warn" | "error" | "md" | "json",
    message: string
  ): void;
  emit(type: "utilization", message: IUtilizationProps): void;
  emit(type: MessageNameType, message: string | IUtilizationProps): void {
    const messageHead = {
      type,
      nickname: this.nickname,
    };
    switch (type) {
      case "utilization":
        if (typeof message != "string") {
          this.socket.emit("message", {
            ...messageHead,
          });
        }
        break;

      default:
        break;
    }
  }
}

// const m = new Mitter({
//   token: "1:123",
//   nickname: "222",
// });

// m.emit("info", "test info message");
// m.emit({
//   type: 'utilization'
//   text: "utilization message",
//   props: {
//     value: 30,
//     max: 100,
//     warning: 80,
//     critical: 90,

//   }
// });
