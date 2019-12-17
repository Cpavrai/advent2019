const Moon = require("./moon");

class MoonList {
    
    constructor(moons_coordinates, new_id) {
        this.moons = [];
        let idx = 0;
        this.id = new_id;

        moons_coordinates.forEach(element => {
            this.moons.push(new Moon({...element}, idx++));
        });
        return this;
    }

    compare(other_moons_list) {
        const this_moons = this.moons;
        let index = 0;
        while (index < 4) {
            if (this_moons[index].position["x"] != other_moons_list[index]["x"]
                || this_moons[index].position["y"] != other_moons_list[index]["y"]
                || this_moons[index].position["z"] != other_moons_list[index]["z"]) return false
            index++
        }
        return true;//this.checkNullVelocity();
    }

    checkNullVelocity(label=null) {
        let index = 0;

        while (index < 4) {
            if (label != null && this.moons[index].velocity[label]) return false
            else if (label == null && this.moons[index].velocity.x || this.moons[index].velocity.y || this.moons[index].velocity.z) return false;
            index ++;
        }
        return true;
    }

    nextStep(nb_step) {
        if (!nb_step) return this;
        this.moons.forEach((e) => {
            e.computeVelocity(this.moons.filter((a) => a.id != e.id))
        })
        this.moons.forEach((e) => {
            e.computePosition()
        })
        return this.nextStep(nb_step - 1);
    }

    nextStepFor(nb_step) {
        let i = 0;

        while (i < nb_step) {
            this.moons.forEach((e) => {
                e.computeVelocity(this.moons.filter((a) => a.id != e.id))
            })
            this.moons.forEach((e) => {
                e.computePosition()
            })
            i++;
        }
        return this;
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