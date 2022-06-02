import { MessageNameType, ClientMessage } from "@mitter/types/src";
export default class Logger {
    private colors;
    constructor();
    log(message: ClientMessage): void;
    header(type: MessageNameType, nickname: string, color: string): string;
    utilization(options: {
        value: number;
        max: number;
        warning: number;
        critical: number;
    }): void;
}
