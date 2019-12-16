const Orbits = require("./models/orbits");
const input = [/* input */];

function buildOrbits(tab) {
	let orbitsList = {};

	tab.forEach((link) => {
		let [first_elem, second_elem] = link.split(")")
		
		if (!orbitsList[first_elem])
			orbitsList[first_elem] = new Orbits(null)
		if (!orbitsList[second_elem])
			orbitsList[second_elem] = new Orbits(first_elem)
		orbitsList[second_elem].origin = first_elem
	})
	return orbitsList;
}

function sumOrbits(tab) {
	let orbitsList = buildOrbits(tab), res = [];

	Object.values(orbitsList).forEach((orbit) => {
		let tmp = orbit;
		while (tmp.origin != null) {
			tmp = orbitsList[tmp.origin];
			res++;
		}
	})
	return res;
}

module.exports = {
	sumOrbits: sumOrbits
}

// console.log(sumOrbits(input));