import Logger from "./services/logger.service";
import { io, Socket } from "socket.io-client";
import chalk from "chalk";
import {
  ClientMessage,
  CodeProps,
  MessageNameType,
  ServerMessage,
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
  on(event: MessageNameType, cb: (data: ServerMessage) => unknown) {
    this.socket.on(`event_${event}`, (data: ServerMessage) => {
      // this.logger.log(...)
      console.log(data);
      cb(data);
    });
  }

  emit(type: "ok" | "info" | "warn" | "error", message: string): void;
  emit(type: "utilization", message: string, options: UtilizationProps): void;
  emit(type: "md" | "json", message: string, options: CodeProps): void;
  emit(
    type: MessageNameType,
    message: string,
    options?: UtilizationProps | CodeProps
  ): void {
    const messageHead = {
      type,
      nickname: this.nickname,
      text: message,
    };
    if (options) {
      this.socket.emit(
        "message",
        {
          ...messageHead,
          props: options,
        },
        () => {
          this.logger.log({
            ...messageHead,
            props: options,
          } as ClientMessage);
        }
      );
    } else {
      this.socket.emit("message", messageHead, (data: ClientMessage) => {
        this.logger.log(messageHead as ClientMessage);
      });
    }
    // if (type === "utilization") {
    //   this.logger.log({
    //     type: "utilization",
    //     nickname: this.nickname,
    //     text: message,
    //     props: options as UtilizationProps,
    //   });
    // } else if (type === "md" || type === "json") {
    //   this.logger.log({
    //     type: type,
    //     nickname: this.nickname,
    //     text: message,
    //     props: options as CodeProps,
    //   });
    // } else {
    //   this.logger.log({
    //     type: type,
    //     nickname: this.nickname,
    //     text: message,
    //   });
    // }
  }
}
