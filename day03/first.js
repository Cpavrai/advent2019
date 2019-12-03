const input = [/*input*/]

const values = {
    EMPTY: 0,
    FIRST : 1,
    SECOND : 2
}

class Point {
    x = 0
    y = 0
    points = {
        0: {
            0: values.FIRST
        }
    }

    move(direction, len, line) {
        let idx = 0

        switch (direction) {
            case "R":
                while (idx < len) {
                    this.x++
                    this.points[this.y][this.x] = line
                    idx++
                }
                break
            case "L":
                while (idx < len) {
                    this.x--
                    this.points[this.y][this.x] = line
                    idx++
                }
                break
            case "U":
                while (idx < len) {
                    this.y++
                    if (!this.points[this.y])
                        this.points[this.y] = {}
                    this.points[this.y][this.x] = line
                    idx++
                }
                break
            case "D":
                while (idx < len) {
                    this.y--
                    if (!this.points[this.y])
                        this.points[this.y] = {}
                    this.points[this.y][this.x] = line
                    idx++
                }
                break
        }
    }

    reset() {
        this.x = 0
        this.y = 0
    }

    findFirstCross() {
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
                    res.push({x: point, y: row, value: Math.abs(parseInt(row)) + Math.abs(parseInt(point))})
                }
            })
        })
        res = res.sort((a, b) => a.value - b.value)
        return res[0].value
    }
}

function getLastPoint(instructions) {
    var final_point = new Point()
    instructions.forEach((value, key) => {
        value.forEach((e) => {
            final_point.move(e[0], parseInt(e.slice(1)), key + 1)
        })
        final_point.reset()
    })
    console.log("Resultat : ", final_point.findFirstCross())
}

getLastPoint(input)