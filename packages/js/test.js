// import Mitter from "./dist/index.js";
const Mitter = require("./dist/index").default;

const m = new Mitter({
  token: "1:123",
  nickname: "bot",
});

// m.emit("error", "msg");
m.emit("utilization", "msg", {
  value: 20,
  max: 100,
  warning: 80,
  critical: 90,
});
m.on("error", (data) => {
  console.log(data);
});
