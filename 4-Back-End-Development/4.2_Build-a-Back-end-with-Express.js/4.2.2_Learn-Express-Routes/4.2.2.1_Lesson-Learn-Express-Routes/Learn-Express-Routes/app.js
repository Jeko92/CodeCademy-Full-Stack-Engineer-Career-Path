const express = require("express");
const app = express();
const {
  getElementById,
  getIndexById,
  updateElement,
  createElement,
  seedElements,
} = require("./utils");

const PORT = process.env.PORT || 4001;

// Use static server to serve the Express Yourself Website
app.use(express.static("public"));

const expressions = [];
seedElements(expressions, "expressions");

// 03/15 - Writing our first Route
// Open a call to `app.get()` below:
/* app.get("/expressions", (req, res, next) => {
  console.log(req);
}); */

// 04/15 - Sending a Response
// Get all expressions
app.get("/expressions", (req, res, next) => {
  // console.log(req);
  res.send(expressions);
});

// 06/15 - Gretting a Single Expression
// Add a new call to app.get('/expressions/:id') here
/* app.get("/expressions/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  res.send(foundExpression);
}); */

// 07/15 - Setting Status Codes
app.get("/expressions/:id", (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    console.error("Expression not found for id:", req.params.id);
    res.status(404).send("Expression not found");
  }
});

// 10/15 - Using Queries
app.put("/expressions/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// 12/15 - Creating An Expression
app.post("/expressions", (req, res, next) => {
  const receivedExpression = createElement("expressions", req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

// 13/15 - Deleting Old Expressions
app.delete("/expressions/:id", (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

// 14/15 - Adding Animals Routes
app.get("/animals", (req, res, next) => {
  res.send(animals);
});

app.get("/animals/:id", (req, res, next) => {
  const foundAnimal = getElementById(req.params.id, animals);
  if (foundAnimal) {
    res.send(foundAnimal);
  } else {
    res.status(404).send();
  }
});

app.put("/animals/:id", (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
});

app.delete("/animals/:id", (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    animals.splice(animalIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
