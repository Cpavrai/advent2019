const Orbits = require("./models/orbits");
const input = [/* input */];

function buildOrbits(tab) {
	let orbitsList = {};

	tab.forEach((link) => {
		let [first_elem, second_elem] = link.split(")");
		
		if (!orbitsList[first_elem])
			orbitsList[first_elem] = new Orbits(null);
		if (!orbitsList[second_elem])
			orbitsList[second_elem] = new Orbits(first_elem);
		orbitsList[second_elem].origin = first_elem;
		orbitsList[first_elem].putNewOrbit(second_elem);
	})
	return orbitsList;
}

function getPathList(orbitsList, index, path) {
	let res = [];

	path.push(index);
	if (orbitsList[index].origin && orbitsList[index].origin != path[path.length - 2]) {
		res = res.concat(getPathList(orbitsList, orbitsList[index].origin, [...path]))
	}
	if (orbitsList[index].childOrbits.length) {
		orbitsList[index].childOrbits.forEach((e) => {
			if (e != path[path.length - 2]) {
				res = res.concat(getPathList(orbitsList, e, [...path]));
			}
		})
	}
	if (index == "SAN") res.push(path);
	return res;
}

function findPath(tab) {
	let orbitsList = buildOrbits(tab), res = [];

	if (orbitsList["YOU"].origin) {
		res = res.concat(getPathList(orbitsList, orbitsList["YOU"].origin, ["YOU"]))
	}
	if (orbitsList["YOU"].childOrbits.length) {
		orbitsList["YOU"].childOrbits.forEach((e) => {
			res.concat(getPathList(orbitsList, e, ["YOU"]));
		});
	}
	res = res.sort((a, b) => a.length - b.length);
	return res[0].length - 3;
}

module.exports = {
	findPath: findPath
}

// console.log(findPath(input));