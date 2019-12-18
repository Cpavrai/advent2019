const input = ""; /*input*/
const AsteroidMap = require("./models/asteroidMap");

function findMostEfficientAsteroid(map, variable = "position") {
  const asteroidMap = new AsteroidMap(map.split("\n"));

  return asteroidMap.getMostEfficientAsteroid(variable);
}

//console.log(findMostEfficientAsteroid(input, "detection_length"));

module.exports = findMostEfficientAsteroid;
