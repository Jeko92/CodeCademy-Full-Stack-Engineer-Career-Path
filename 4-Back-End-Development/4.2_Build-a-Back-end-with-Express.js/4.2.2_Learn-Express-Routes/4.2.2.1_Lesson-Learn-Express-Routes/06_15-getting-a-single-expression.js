const express = require("express");
const app = express();

// Serves Express Yourself website
app.use(express.static("public"));

const { getElementById, seedElements } = require("./03_15_utils");

const expressions = [];
seedElements(expressions, "expressions");

const PORT = process.env.PORT || 4001;

app.get("/expressions", (req, res, next) => {
  res.send(expressions);
});

// Add a new call to app.get('/expressions/:id') here

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
