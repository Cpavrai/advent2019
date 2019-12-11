const Point = require('./models/point');

const input = [/*input*/]

function getLastPoint(instructions) {
    var final_point = new Point()
    instructions.forEach((value, key) => {
        value.forEach((e) => {
            final_point.move(e[0], parseInt(e.slice(1)), key + 1)
        })
        final_point.reset()
    })
    let res = final_point.findCross()
    res = res.sort((a, b) => a.value - b.value)
    return res
}

// console.log("Resultat :", getLastPoint(input)[0].value)

module.exports = getLastPoint