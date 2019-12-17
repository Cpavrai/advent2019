class Moon {
    position;
    velocity;
    id;

    constructor(new_position, new_id) {
        this.id = new_id;
        this.position = new_position;
        this.velocity = {
            x: 0,
            y: 0,
            z: 0
        };
    }

    computeVelocity(other_moons) {
        other_moons.forEach((moon) => {
            if (moon.position.x > this.position.x)
                this.velocity.x += 1;
            else if (moon.position.x < this.position.x)
                this.velocity.x -= 1;
            if (moon.position.y > this.position.y)
                this.velocity.y += 1;
            else if (moon.position.y < this.position.y)
                this.velocity.y -= 1;
            if (moon.position.z > this.position.z)
                this.velocity.z += 1;
            else if (moon.position.z < this.position.z)
                this.velocity.z -= 1;
        });
        return this;
    }

    computePosition() {
        ["x","y","z"].forEach((key) => this.position[key] += this.velocity[key]);
        return this;
    }

    computePotentialEnergy() {
        let res = 0;
        Object.values(this.position).forEach((e) => res += Math.abs(e));
        return res;
    }

    computeKineticEnergy() {
        let res = 0;
        Object.values(this.velocity).forEach((e) => res += Math.abs(e));
        return res;
    }

    computeTotalEnergy() {
        return this.computePotentialEnergy() * this.computeKineticEnergy();
    }
}

module.exports = Moon