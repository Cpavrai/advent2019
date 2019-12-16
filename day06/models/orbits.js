class Orbits {
	origin = null;
	childOrbits = [];

	constructor(new_origin) {
		this.origin = new_origin;
	}

	putNewOrbit(new_orbit) {
		this.childOrbits.push(new_orbit);
	}

}

module.exports = Orbits;