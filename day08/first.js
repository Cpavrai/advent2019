const input = ""/* input */;

function findFewestZeroLayer(map) {
	let tmp = map[0].match(/0/g).length, tmp_res = map[0];

	map.forEach((line) => {
		if (line.match(/0/g) && line.match(/0/g).length < tmp && line.match(/0/g).length > 0) {
			tmp = line.match(/0/g).length
			tmp_res = line;
		}
	})
	return tmp_res;
}

function compute(str, size={x: 25, y:6}) {
	let map = [], idx = 0;

	while (str[idx]) {
		map.push(str.substr(idx, size.x * size.y));
		idx += size.x * size.y
	}
	let line = findFewestZeroLayer(map);
	return line.match(/1/g).length * line.match(/2/g).length;
}

// console.log(compute(input));

module.exports = {
	compute: compute
}