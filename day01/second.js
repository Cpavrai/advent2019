const tab = [/* input */]
let res = 0

function computeFuel(i, previous=0) {
    if (Math.floor(i / 3) > 1)
        return (-2 + Math.floor(i / 3)) + computeFuel(Math.floor(i / 3) - 2, previous)
    return Math.floor(previous)
}

tab.forEach((e) => res += computeFuel(e))

console.log("Résultat :", res)