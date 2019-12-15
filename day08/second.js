const input = /*"input"*/;

function productPicture(str, size={x:25,y:6}) {
	let res = str.substr(0, size.x * size.y), y = 0, x;

	while (str[y] && res.match(/2/g) && res.match(/2/g).length) {
		res = res.split("")
		x = 0;
		while (x < (size.x * size.y)) {
			res[x] = res[x] == "2" ? str[y + x] : res[x];
			x++;
		}
		res = res.join("");
		y += (size.y * size.x);
	}
	return res;
}

module.exports = {
	productPicture: productPicture
}

// const result = productPicture(input);
// let i = 0;
// while (result[i]) {
// 	console.log(result.substr(i, 25).replace(/0/g, " "))
// 	i+=25
// }