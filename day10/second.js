const input = ""; /* input */
const AsteroidMap = require("./models/asteroidMap");

function listAsteroidBeingDestroyed(map) {
  const asteroidMap = new AsteroidMap(map.split("\n"));

  return asteroidMap.listQueueDestroy(asteroidMap.getMostEfficientAsteroid("position"));
}

// console.log(listAsteroidBeingDestroyed(input)[199]);

module.exports = listAsteroidBeingDestroyed;
