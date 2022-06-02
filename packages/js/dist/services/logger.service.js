"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor() {
        this.colors = {
            info: "#03ABFF",
            ok: "#59FF00",
            warn: "#FFEC00",
            error: "#FF5100",
            default: "#ABABAB",
        };
    }
    log(message) {
        let result = "";
        switch (message.type) {
            case "utilization":
                result += this.header("utilization", message.nickname, this.colors.default);
                result += this.utilization(Object.assign({}, message.props));
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
                result += this.header(message.type, message.nickname, this.colors[message.type]
                    ? this.colors[message.type]
                    : this.colors.default);
                break;
        }
        result += message.text + "\n";
        console.log(result);
    }
    header(type, nickname, color) {
        return `●← ●→ ${chalk_1.default.hex(color)(type.toUpperCase())} ${chalk_1.default.gray("[" + nickname + "]")}\n`;
    }
    utilization(options) { }
}
exports.default = Logger;
//# sourceMappingURL=logger.service.js.map