const beginnings = [
  "Believe in yourself",
  "You are capable of great things",
  "Stay positive",
  "Embrace each day",
  "Opportunities are everywhere",
  "Your potential is limitless",
  "Dream big",
  "Success is within reach",
  "You are unstoppable",
  "Create your own destiny",
];

const middles = [
  "and good things will happen",
  "because you deserve it",
  "and let your light shine",
  "and make it happen",
  "with a positive attitude",
  "and amazing things will unfold",
  "with passion and determination",
  "and your efforts will pay off",
  "and never give up",
  "and inspire others",
];

const endings = [
  "You've got this!",
  "The world is yours to conquer",
  "Your potential is endless",
  "Keep pushing forward",
  "You are a winner",
  "Make it happen!",
  "The future belongs to you",
  "You are a force to be reckoned with",
  "Success is your destiny",
  "You're on the path to greatness",
];

const generateRandomIndex = (num) => {
  return Math.floor(Math.random() * num);
};

let mixedMessage = "";

const choseRandomIndexes = (arrOne, arrTwo, arrThree) => {
  let randomIndexes = [];
  randomIndexes.push(generateRandomIndex(arrOne.length));
  randomIndexes.push(generateRandomIndex(arrTwo.length));
  randomIndexes.push(generateRandomIndex(arrThree.length));
  console.log(randomIndexes);
  return randomIndexes;
};

const generateRandomMessage = (arrOne, arrTwo, arrThree) => {
  const randoms = choseRandomIndexes(arrOne, arrTwo, arrThree);
  mixedMessage += `${arrOne[randoms[0]]}, ${arrTwo[randoms[1]]}, ${
    arrThree[randoms[2]]
  }`;
  return mixedMessage;
};

// console.log(generateRandomIndex(beginnings));
console.log(generateRandomMessage(beginnings, middles, endings));
