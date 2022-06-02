import Logger from "./services/logger.service";
import { io, Socket } from "socket.io-client";
import chalk from "chalk";
import {
  CodeProps,
  MessageNameType,
  UtilizationProps,
} from "@mitter/types/src";
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
    this.socket.once("room_connected", (data: string) => {
      this.logger.log({
        type: "ok",
        text: `Connected to room: ${data}`,
        nickname: "Mitter",
      });
    });
    this.socket.on("disconnect", () => {
      this.logger.log({
        type: "error",
        text: "Disconnected...",
        nickname: "Mitter",
      });
    });
    this.socket.on("connect_error", () => {
      this.logger.log({
        type: "error",
        text: "Connection failed...",
        nickname: "Mitter",
      });
    });
    this.socket.on("error", (error: string) => {
      this.logger.log({
        type: "error",
        text: error,
        nickname: "Mitter",
      });
    });

    return this;
  }

  emit(type: "ok" | "info" | "warn" | "error", message: string): void;
  emit(type: "utilization", message: string, options: UtilizationProps): void;
  emit(type: "md" | "json", message: string, options: CodeProps): void;
  emit(
    type: MessageNameType,
    message: string,
    options?: UtilizationProps | CodeProps
  ): void {
    // const messageHead = {
    //   type,
    //   nickname: this.nickname,
    //   text: message
    // };
    // switch (type) {
    //   case "utilization":
    //     break;
    //   default:
    //     break;
    // }
  }
}
