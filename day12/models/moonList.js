const Moon = require("./moon");

class MoonList {
    moons = [];

    constructor(moons_coordinates) {
        let idx = 0;

        moons_coordinates.forEach(element => {
            this.moons.push(new Moon(element, idx++));
        });
    }

    getMoons() {
        return this.moons;
    }

    nextStep(nb_step) {
        if (!nb_step) return this.moons;
        this.moons.forEach((e) => {
            e.computeVelocity(this.moons.filter((a) => a.id != e.id))
        })
        this.moons.forEach((e) => {
            e.computePosition()
        })
        return this.nextStep(nb_step - 1);
    }

    sumTotalEnergy() {
        let res = 0;

        this.moons.forEach((e) => {
            res += e.computeTotalEnergy();
        })
        return res;
    }
}

module.exports = MoonList