// Require in trails module from trails.js
const trails = require("./08_09_trails.js");
// Require in util module here
const util = require("util");

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      const foundTrail = trails[trail];
      callback(null, foundTrail);
    } else {
      callback(new Error("Trail not found!"));
    }
  }, 1000);
};

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  } else {
    const mi = trailData.miles;
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`);
  }
}

getTrailDistance("North Country", callback);

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise("North Country")
  .then((trail) => {
    const nickname = trail.nickname;
    const km = trail.kilometers;
    /* console.log(`Your chosen trail has nickname:${trail.nickname}. It is ${trail.kilometers} long and located in ${trail.region}`; */
    const region = trail.region;
    console.log(
      `Your chosen trail has nickname:${nickname}. It is ${km}km long and located in ${region}`
    );
  })
  .catch((error) => {
    console.log("Trail not found!", error);
  });
