const MoonList = require("./models/moonList");
// const input = [{x:17, y:5, z:1},{x:-2, y:-8, z:8},{x:7, y:-6, z:14},{x:1, y:-10, z:4}];
const lcm = require("mathjs").lcm;

function findFullLoopStep(starting_moons) {
    const moonList = new MoonList(starting_moons, 0);
    let nb = 0, looping = {};

    while (Object.keys(looping).length !== 3) {
        if (nb !== 0
            && moonList.moons[0].position.x == starting_moons[0].x
            && moonList.moons[1].position.x == starting_moons[1].x
            && moonList.moons[2].position.x == starting_moons[2].x
            && moonList.moons[3].position.x == starting_moons[3].x
            && moonList.checkNullVelocity("x")
            && !looping["x"])
            looping["x"] = nb;
        if (nb !== 0
            && moonList.moons[0].position.y == starting_moons[0].y
            && moonList.moons[1].position.y == starting_moons[1].y
            && moonList.moons[2].position.y == starting_moons[2].y
            && moonList.moons[3].position.y == starting_moons[3].y
            && moonList.checkNullVelocity("y")
            && !looping["y"])
            looping["y"] = nb;
        if (nb !== 0
            && moonList.moons[0].position.z == starting_moons[0].z
            && moonList.moons[1].position.z == starting_moons[1].z
            && moonList.moons[2].position.z == starting_moons[2].z
            && moonList.moons[3].position.z == starting_moons[3].z
            && moonList.checkNullVelocity("z")
            && !looping["z"])
            looping["z"] = nb;
        moonList.nextStep(1);
        nb++;
    }
    result = lcm(looping.x, lcm(looping.y, looping.z));
    return result;
}

// console.log(findFullLoopStep(input));

module.exports = findFullLoopStep