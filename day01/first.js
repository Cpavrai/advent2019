const tab = [/* input */]
let res = 0

function computeFuel(i) {
    return Math.floor(i / 3) - 2
}

tab.forEach((e) => res += computeFuel(e))

console.log("Résultat :", res)