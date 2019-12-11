const input = [/* input */]

function computeFuel(i) {
    return Math.floor(i / 3) - 2
}

function computeTotalFuel(tab) {
    let res = 0

    tab.forEach((e) => res += computeFuel(e))
    return res
}

module.exports = computeTotalFuel