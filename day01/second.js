const input = [/* input */]

function computeFuel(i, previous=0) {
    if (Math.floor(i / 3) > 1)
        return (-2 + Math.floor(i / 3)) + computeFuel(Math.floor(i / 3) - 2, previous)
    return Math.floor(previous)
}

function computeTotalFuel(tab) {
    let res = 0

    tab.forEach((e) => res += computeFuel(e))
    return res
}

module.exports = computeTotalFuel

//console.log("Résultat :", computeTotalFuel(input))