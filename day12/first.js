const MoonList = require("./models/moonList")

function emulate(starting_moons, nb_step) {
    const moonList = new MoonList(starting_moons);
    moonList.nextStep(nb_step);
    return moonList;
}

// console.log(emulate([{x:17, y:5, z:1},{x:-2, y:-8, z:8},{x:7, y:-6, z:14},{x:1, y:-10, z:4}], 1000).sumTotalEnergy());

module.exports = emulate