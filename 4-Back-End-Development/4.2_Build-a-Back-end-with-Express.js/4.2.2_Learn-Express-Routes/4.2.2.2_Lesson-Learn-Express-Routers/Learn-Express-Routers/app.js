const express = require("express");
const app = express();

const {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement,
} = require("./utils");

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

const animals = [];
seedElements(animals, "animals");

// 3/7 Exercise: Using Multiple Router Files
const expressionsRouter = require("./expressions.js");

app.use("/expressions", expressionsRouter);

// 6/7 Refactoring Animals Routes
const animalsRouter = require("./animals.js");

app.use("/animals", animalsRouter);

// 2/7 Express.Router
// Get all expressions
/* expressionsRouter.get("/expressions", (req, res, next) => {
  res.send(expressions);
}); */

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
