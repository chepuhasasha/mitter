import {
  ICodeMessage,
  IMessage,
  IUtilizationMessage,
  MessageNameType,
} from "@mitter/types/src";

export default class Logger {
  private colors = {
    info: "#03ABFF",
    ok: "#59FF00",
    warn: "#FFEC00",
    error: "#FF5100",
    default: "#ABABAB",
  };
  constructor() {}

  log(message: IMessage | ICodeMessage | IUtilizationMessage) {
    let result = "";
    switch (message.type) {
      case "utilization":
        result += this.header(
          "utilization",
          message.nickname,
          this.colors.default
        );
        break;

      default:
        break;
    }
    console.log(result);
  }
  header(type: MessageNameType, nickname: string, color: string): string {
    return `${type} [${nickname}]`;
  }
  utilization() {}
}
