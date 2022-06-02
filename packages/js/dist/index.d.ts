import Logger from "./services/logger.service";
import { Socket } from "socket.io-client";
import { CodeProps, MessageNameType, ServerMessage, UtilizationProps } from "@mitter/types/src";
export default class Mitter {
    nickname: string;
    host: string;
    socket: Socket;
    logger: Logger;
    constructor({ token, nickname, host, }: {
        token: string;
        nickname: string;
        host?: string;
    });
    on(event: MessageNameType, cb: (data: ServerMessage) => unknown): void;
    emit(type: "ok" | "info" | "warn" | "error", message: string): void;
    emit(type: "utilization", message: string, options: UtilizationProps): void;
    emit(type: "md" | "json", message: string, options: CodeProps): void;
}
