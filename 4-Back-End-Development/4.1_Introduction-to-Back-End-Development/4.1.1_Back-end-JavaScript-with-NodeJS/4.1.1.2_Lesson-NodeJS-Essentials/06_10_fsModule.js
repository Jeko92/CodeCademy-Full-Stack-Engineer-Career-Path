const fs = require("fs");

let secretWord = null;

const readSecretWordCallback = (err, data) => {
  if (err) {
    console.log(`Oops! Something went wrong: ${err}`);
  } else {
    console.log(`Here is your clue: ${data}`);
  }
};

fs.readFile("./06_10_fileOne.txt", "utf-8", readSecretWordCallback);
fs.readFile("./06_10_anotherFile.txt", "utf-8", readSecretWordCallback);
fs.readFile("./06_10_finalFile.txt", "utf-8", readSecretWordCallback);
secretWord = "cheeseburgerpizzabagels";
