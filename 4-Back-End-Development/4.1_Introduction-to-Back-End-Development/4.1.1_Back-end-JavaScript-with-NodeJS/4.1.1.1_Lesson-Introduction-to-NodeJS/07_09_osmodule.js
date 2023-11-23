const os = require("os");

/* console.log(os.type());
console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.uptime()); */

const local = {
  "Home Directory": os.homedir(),
  "Operating System": os.type(),
  "Last Reboot": os.uptime(),
};

/* const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
    constants: os.constants(),
  CPUS: os.cpus(),
  devNull: os.devNull(),
}; */

const osMethods = {};

const validMethods = [
  "OEL",
  "arch",
  "constants",
  "cpus",
  "devNull",
  "endianness",
  "freemem",
  "getPriority([pid])",
  "homedir",
  "hostname",
  "loadavg",
  "networkInterfaces",
  "platform",
  "release",
  "setPriority([pid, ]priority)",
  "tmpdir",
  "totalmem",
  "type",
  "uptime",
  "userInfo[]",
  "version",
];

validMethods.forEach((methodName) => {
  if (typeof os[methodName] === "function") {
    osMethods[methodName] = os[methodName]();
  }
});

console.log(local);
// console.log(server);
console.log(osMethods);
