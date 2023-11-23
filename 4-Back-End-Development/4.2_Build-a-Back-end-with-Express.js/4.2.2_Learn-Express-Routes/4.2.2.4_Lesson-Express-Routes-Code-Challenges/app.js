const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const sausageTypes = [
  "bratwurst",
  "andouille",
  "chorizo",
  "boudin",
  "kielbasa",
];

app.get("/sausages", (req, res, next) => {
  res.send(sausageTypes);
});

const buildingMaterials = {
  wood: ["plywood", "2x4s", "cedar shingles"],
  metal: ["steel girders", "wall studs", "rebar"],
};

app.get("/metals", (req, res, next) => {
  const arrayToSend = buildingMaterials.metal;
  res.send(arrayToSend);
});

const battlefields = {
  fortSumter: {
    state: "SC",
  },
  manassas: {
    state: "VA",
  },
  gettysburg: {
    state: "PA",
  },
  antietam: {
    state: "MD",
  },
};

app.get("/battlefields/:name", (req, res, next) => {
  const battlefieldName = req.params.name;
  const battlefield = battlefields[battlefieldName];
  if (battlefield) {
    res.send(battlefield);
  } else {
    res.status(404).send();
  }
});

const currencies = {
  diram: {
    countries: ["UAE", "Morocco"],
  },
  real: {
    countries: ["Brazil"],
  },
  dinar: {
    countries: ["Algeria", "Bahrain", "Jordan", "Kuwait"],
  },
  vatu: {
    countries: ["Vanuatu"],
  },
  shilling: {
    countries: ["Tanzania", "Uganda", "Somalia", "Kenya"],
  },
};

app.put("/currencies/:name/countries", (req, res, next) => {
  const countries = req.query;
  const currencyName = req.params.name;
  currencies[currencyName] = countries;
  res.send(currencies[currencyName]);
});

const soups = ["gazpacho", "borscht", "primordial", "avgolemono", "laksa"];
app.post("/soups", (req, res, next) => {
  const receivedSoup = req.query.name;
  if (receivedSoup) {
    soups.push(receivedSoup);
    res.status(201).send(receivedSoup);
  } else {
    res.status(400).send();
  }
});

const puddingFlavors = ["chocolate", "banana", "butterscotch", "pistachio"];

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name);
};

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1);
};

app.delete("/puddings/:flavor", (req, res, next) => {
  const index = findPuddingIndex(req.params.flavor);
  if (index !== -1) {
    deletePuddingAtIndex(index);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

const pastas = ["agnolotti", "cavatelli", "gemelli", "tortellini"];

app.get("/pastas", (req, res, next) => {
  res.send(pastas);
});

const sauceRouter = express.Router();
// Add your code here:
app.use("/sauces", sauceRouter);

const sauces = [
  "carbonara",
  "primavera",
  "bolognese",
  "puttanesca",
  "fra diavolo",
];

sauceRouter.get("/", (req, res, next) => {
  res.send(sauces);
});

const mountains = ["denali", "olympus", "kilimanjaro", "matterhorn"];
const mountainRanges = ["alps", "andes", "himalayas", "rockies"];

const mountainsRouter = express.Router();
const mountainRangesRouter = express.Router();
app.use("/mountains", mountainsRouter);
app.use("/mountain-ranges", mountainRangesRouter);

mountainsRouter.get("/mountains", (req, res, next) => {
  res.send(mountains);
});

mountainRangesRouter.get("/mountain-ranges", (req, res, next) => {
  res.send(mountainRanges);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
