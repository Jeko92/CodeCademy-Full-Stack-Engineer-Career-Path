const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  if (randomQuote) {
    // console.log(randomQuote);
    res.send({ quote: randomQuote });
  } else {
    res.status(404).send();
  }
});

app.get("/api/quotes", (req, res, next) => {
  //   console.log(req.query);
  if (!req.query.person) {
    // console.log("Person Parameter Not Provided");
    // console.log("Req.Query when no parameter provided is: ", req.query);
    // console.log(quotes);
    // res.send(quotes);
    res.send({ quotes: quotes });
  } else {
    // console.log("Person Parameter Was Provided");
    // console.log("Req.Query is: ", req.query);
    // console.log(`Person searched in query was ${req.query.person}`);
    // console.log(`Server response is: `, res);
    const personQuotes = quotes.filter(
      (quote) => quote.person === req.query.person
    );
    // console.log(personQuotes);
    // res.send(personQuotes);
    res.send({ quotes: personQuotes });
  }
});

app.post("/api/quotes", (req, res, next) => {
  const newQuote = req.query.quote;
  const newPerson = req.query.person;
  if (newQuote != "" && newPerson != "") {
    quotes.push({ quote: newQuote, person: newPerson });
    res.status(201).send({ quote: { quote: newQuote, person: newPerson } });
  } else {
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
