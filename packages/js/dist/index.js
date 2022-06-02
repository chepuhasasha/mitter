"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_service_1 = __importDefault(require("./services/logger.service"));
const socket_io_client_1 = require("socket.io-client");
const chalk_1 = __importDefault(require("chalk"));
class Mitter {
    constructor({ token, nickname, host = "ws://localhost:3000", }) {
        this.nickname = nickname;
        this.host = host;
        this.logger = new logger_service_1.default();
        this.socket = (0, socket_io_client_1.io)(this.host, {
            auth: {
                token,
            },
        });
        this.socket.on("connect", () => {
            this.logger.log({
                type: "ok",
                text: `Host: ${chalk_1.default.cyan(this.host)} - connected.`,
                nickname: "Mitter",
            });
        });
        this.socket.once("room_connected", (data) => {
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
        this.socket.on("error", (error) => {
            this.logger.log({
                type: "error",
                text: error,
                nickname: "Mitter",
            });
        });
        return this;
    }
    on(event, cb) {
        this.socket.on(`event_${event}`, (data) => {
            // this.logger.log(...)
            console.log(data);
            cb(data);
        });
    }
    emit(type, message, options) {
        const messageHead = {
            type,
            nickname: this.nickname,
            text: message,
        };
        if (options) {
            this.socket.emit("message", Object.assign(Object.assign({}, messageHead), { props: options }), (data) => {
                this.logger.log(Object.assign(Object.assign({}, messageHead), { props: options }));
            });
        }
        else {
            this.socket.emit("message", messageHead, (data) => {
                this.logger.log(messageHead);
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
exports.default = Mitter;
//# sourceMappingURL=index.js.map