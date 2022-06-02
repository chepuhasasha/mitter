import chalk from "chalk";
import { MessageNameType, ClientMessage } from "@mitter/types/src";

export default class Logger {
  private colors = {
    info: "#03ABFF",
    ok: "#59FF00",
    warn: "#FFEC00",
    error: "#FF5100",
    default: "#ABABAB",
  };
  constructor() {}

  log(message: ClientMessage) {
    let result = "";
    switch (message.type) {
      case "utilization":
        result += this.header(
          "utilization",
          message.nickname,
          this.colors.default
        );
        result += this.utilization({ ...message.props });
        break;
      case "json":
        result += this.header("json", message.nickname, this.colors.default);
        result += message.props.code;
        break;
      case "md":
        result += this.header("md", message.nickname, this.colors.default);
        result += message.props.code;
        break;

      default:
        result += this.header(
          message.type,
          message.nickname,
          this.colors[message.type]
            ? this.colors[message.type]
            : this.colors.default
        );
        break;
    }
    result += message.text;
    console.log(result);
  }
  header(type: MessageNameType, nickname: string, color: string): string {
    return `●← ●→ ${chalk.hex(color)(type.toUpperCase())} ${chalk.gray(
      "[" + nickname + "]"
    )}\n`;
  }
  utilization(options: {
    value: number;
    max: number;
    warning: number;
    critical: number;
  }) {}
}
