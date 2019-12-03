const values = require("./values");

class Point {
    x = 0
    y = 0
    step = 1
    points = {
        0: {
            0: values.FIRST
        }
    }
    steps = {
        1: {
            0: {
                0: 0
            }
        },
        2: {
            0: {
                0: 0
            }
        }
    }

    move(direction, len, line) {
        let idx = 0

        switch (direction) {
            case "R":
                while (idx < len) {
                    this.x++
                    this.points[this.y][this.x] = line
                    this.steps[line][this.y][this.x] = this.steps[line][this.y][this.x] || this.step
                    this.step++
                    idx++
                }
                break
            case "L":
                while (idx < len) {
                    this.x--
                    this.points[this.y][this.x] = line
                    this.steps[line][this.y][this.x] = this.steps[line][this.y][this.x] || this.step
                    this.step++
                    idx++
                }
                break
            case "U":
                while (idx < len) {
                    this.y++
                    if (!this.points[this.y])
                        this.points[this.y] = {}
                    if (!this.steps[line][this.y])
                        this.steps[line][this.y] = {}
                    this.points[this.y][this.x] = line
                    this.steps[line][this.y][this.x] = this.steps[line][this.y][this.x] || this.step
                    this.step++
                    idx++
                }
                break
            case "D":
                while (idx < len) {
                    this.y--
                    if (!this.points[this.y])
                        this.points[this.y] = {}
                    if (!this.steps[line][this.y])
                        this.steps[line][this.y] = {}
                    this.points[this.y][this.x] = line
                    this.steps[line][this.y][this.x] = this.steps[line][this.y][this.x] || this.step
                    this.step++
                    idx++
                }
                break
        }
    }

    reset() {
        this.x = 0
        this.y = 0
        this.step = 1
    }

    findCross() {
        let res = []
        Object.keys(this.points).forEach((row) => {
            Object.keys(this.points[row]).forEach((point) => {
                if ((row != 0 && point != 0)
                    && this.points[parseInt(row)][parseInt(point) - 1]
                    && this.points[parseInt(row)][parseInt(point) + 1]
                    && this.points[parseInt(row) - 1]
                    && this.points[parseInt(row) - 1][parseInt(point)]
                    && this.points[parseInt(row) + 1]
                    && this.points[parseInt(row) + 1][parseInt(point)]
                    && (this.points[parseInt(row)][parseInt(point) - 1]
                        + this.points[parseInt(row)][parseInt(point) + 1]
                        + this.points[parseInt(row) - 1][parseInt(point)]
                        + this.points[parseInt(row) + 1][parseInt(point)]) == 6
                    ) {
                    res.push({
                        x: point,
                        y: row,
                        value: Math.abs(parseInt(row)) + Math.abs(parseInt(point)),
                        steps: this.steps[values.FIRST][parseInt(row)][parseInt(point)] + this.steps[values.SECOND][parseInt(row)][parseInt(point)]
                    })
                }
            })
        })
        return res
    }
}

module.exports = Point