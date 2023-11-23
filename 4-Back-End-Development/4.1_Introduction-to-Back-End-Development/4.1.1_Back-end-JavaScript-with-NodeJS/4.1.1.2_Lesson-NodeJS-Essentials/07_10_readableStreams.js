const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("07_10_shoppingList.txt"),
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface.on("line", printData);
