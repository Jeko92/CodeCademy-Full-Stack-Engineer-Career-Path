const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

const PORT = process.env.PORT || 4001;

const spiceRack = [
  {
    id: 1,
    name: "cardamom",
    grams: 45,
  },
  {
    id: 2,
    name: "pimento",
    grams: 20,
  },
  {
    id: 3,
    name: "cumin",
    grams: 450,
  },
  {
    id: 4,
    name: "sichuan peppercorns",
    grams: 107,
  },
];

let nextSpiceId = 5;

app.use(bodyParser.json());

// Add your code here:
// 2/4 router.param()
/* app.param("spiceId", (req, res, next, id) => {
  const spiceId = Number(id);
  const spiceIndex = spiceRack.findIndex((spice) => spice.id === spiceId);

  if (spiceIndex !== -1) {
    req.spiceIndex = spiceIndex;
    next();
  } else {
    res.sendStatus(404);
  }
});

app.get("/spices/", (req, res, next) => {
  res.send(spiceRack);
});

app.post("/spices/", (req, res, next) => {
  const newSpice = req.body.spice;
  if (newSpice.name && newSpice.grams) {
    newSpice.id = nextSpiceId++;
    spiceRack.push(newSpice);
    res.send(newSpice);
  } else {
    res.status(400).send();
  }
});

app.get("/spices/:spiceId", (req, res, next) => {
  //   const spiceId = Number(req.params.id);
  //   const spiceIndex = spiceRack.findIndex((spice) => spice.id === spiceId);
  //   if (spiceIndex !== -1) {
  res.send(spiceRack[req.spiceIndex]);
  //   } else {
  //     res.status(404).send("Spice not found.");
  //   }
});

app.put("/spices/:spiceId", (req, res, next) => {
  //   const spiceId = Number(req.params.id);
  //   const spiceIndex = spiceRack.findIndex((spice) => spice.id === spiceId);
  //   if (spiceIndex !== -1) {
  spiceRack[req.spiceIndex] = req.body.spice;
  res.send(spiceRack[req.spiceIndex]);
  //   } else {
  //     res.status(404).send("Spice not found.");
  //   }
});

app.delete("/spices/:spiceId", (req, res, next) => {
  //   const spiceId = Number(req.params.id);
  //   const spiceIndex = spiceRack.findIndex((spice) => spice.id === spiceId);
  //   if (spiceIndex !== -1) {
  spiceRack.splice(req.spiceIndex, 1);
  res.status(204).send();
  //   } else {
  //     res.status(404).send("Spice not found.");
  //   }
}); */

// 3/4 Merge Parameters

const spiceRacks = [
  {
    id: 1,
    location: "Kitchen Countertop",
  },
  {
    id: 2,
    location: "Pantry",
  },
  {
    id: 3,
    location: "Outdoor Barbecue",
  },
];

let nextSpiceRackId = 4;

app.param("spiceRackId", (req, res, next, id) => {
  const idToFind = Number(id);
  const rackIndex = spiceRacks.findIndex(
    (spiceRack) => spiceRack.id === idToFind
  );
  if (rackIndex !== -1) {
    req.spiceRack = spiceRacks[rackIndex];
    req.spiceRackIndex = rackIndex;
    next();
  } else {
    res.status(404).send("Spice Rack Not Found.");
  }
});

app.get("/spice-racks/", (req, res, next) => {
  res.send(spiceRacks);
});

app.post("/spice-racks/", (req, res, next) => {
  const newRack = req.body.spiceRack;
  newRack.id = nextSpiceRackId++;
  spiceRacks.push(newRack);
  res.send(newRack);
});

app.get("/spice-racks/:spiceRackId", (req, res, next) => {
  res.send(req.spiceRack);
});

app.put("/spice-racks/:spiceRackId", (req, res, next) => {
  const updatedRack = req.body.spiceRack;
  if (req.spiceRack.id !== updatedRack.id) {
    res.status(400).send("Cannot update Spice Rack Id");
  } else {
    spiceRacks[req.spiceRackIndex] = updatedRack;
    res.send(spiceRacks[req.spiceRackIndex]);
  }
});

app.delete("/spice-racks/:spiceRackId", (req, res, next) => {
  spiceRacks.splice(req.spiceRackIndex, 1);
  res.status(204).send();
});

const spicesRouter = require("./spicesRouter");

// Write your code below:

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
