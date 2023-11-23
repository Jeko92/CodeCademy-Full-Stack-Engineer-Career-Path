// The console and process modules are global and don't need to be required to use!
const os = require("os");
const util = require("util");

// Use console.count() to log how many times a function is called.
const displayOsInfo = () => {
  console.count("Number of displayOsInfo calls");
  const osInfo = {};

  const validMethods = [
    "arch",
    "cpus",
    "freemem",
    "homedir",
    "hostname",
    "loadavg",
    "platform",
    "release",
    "totalmem",
    "type",
    "uptime",
    "version",
  ];

  validMethods.forEach((methodName) => {
    if (typeof os[methodName] === "function") {
      osInfo[methodName] = os[methodName]();
    }
  });

  return null;
};

displayOsInfo();
displayOsInfo();
displayOsInfo();

// Use process.emitWarning() to create and log a custom warning message to the terminal.
console.log(
  process.emitWarning("Something went wrong!", {
    code: "MY_WARNING",
    detail: "We are trying to fix problem asap!",
  })
);

// Use os.freemem() to check how much free system memory is available in the learning environment.
console.log(os.freemem());

// Use util.format() to log a formatted object to the terminal. */
console.log(util.format("Age: %d years old", 31));
console.log(util.format("The price is $%f", 99.99));
console.log(util.format("%f", ("fff", 10)));
console.log(
  util.format("Person: %o", { hello: "world", goodbye: "emptiness" })
);
console.log(
  util.formatWithOptions({ colors: true }, "See object %o", { foo: 42 })
);
